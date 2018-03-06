// https://docs.microsoft.com/en-us/dotnet/core/tools/dotnet-publish?tabs=netcore2x
// https://docs.microsoft.com/en-us/dotnet/core/rid-catalog
#addin nuget:?package=Cake.VersionReader
#addin nuget:?package=Cake.FileHelpers
#addin nuget:?package=Newtonsoft.Json

var target = Argument<string>("target", "Default");

#region Build
// Osx: osx-x64
// Windows: win-x64
// Linux: ubuntu-x64, rhel-x64, opensuse-x64
var runtime = Argument<string>("runtime", "win-x64");
var defaultProjectName= System.IO.Path.GetFileNameWithoutExtension(GetFiles("./*.sln").FirstOrDefault().ToString());
var projectName= Argument<string>("projectname", defaultProjectName); 
var sln= $"./{projectName}.sln";
var dist= "./dist";


void BuildWithRuntime(string localRuntime)
{
    Information($"Build runtime={localRuntime}");
    CleanDirectory(dist);
    DotNetCoreRestore(sln);
    DotNetCorePublish(sln, new DotNetCorePublishSettings{
        Configuration = "Release",
        OutputDirectory = dist,
        ArgumentCustomization= (arg)=> arg.Append("--self-contained")   
                                           .Append($"--runtime {localRuntime}")
        });
}

void ZipWithRuntime(string localRuntime)
{
    Information($"Zip runtime={localRuntime}");
    var file = MakeAbsolute(Directory(dist))+ $"/{projectName}.dll";
    var version= GetVersionNumber(file);
    var zipFilename=$"{projectName}.{version}.{localRuntime}.zip"; 
    if (System.IO.File.Exists(zipFilename))
        System.IO.File.Delete(zipFilename);
    Information(zipFilename);
    Zip(dist, zipFilename);
}


Task("BuildIt")
    .Does(() => {
        BuildWithRuntime(runtime);
    });

Task("ZipIt")
    .Does(() => {
        ZipWithRuntime(runtime);
    });    

Task("Build")
    .IsDependentOn("BuildIt")
    .Does(() => {
    });    

Task("Zip")
    .IsDependentOn("Build")
    .IsDependentOn("ZipIt")
    .Does(() => {
    });

Task("DefaultBuild")
    .IsDependentOn("Build")
    .IsDependentOn("Zip")
    .Does(() => {
    });

Task("BuildAll")
    .Does(() => {
        foreach(var localRuntime in new string [] {"win-x64", "osx-x64", "ubuntu-x64" })
        {
             BuildWithRuntime(localRuntime);
             ZipWithRuntime(localRuntime);
        }
    });

#endregion

#region Ng

var create = Argument<string>("create", "layout");
var name = Argument<string>("name", "abc");

var layoutDir= "./ClientApp/src/app/layout";
var templatePageDir= System.IO.Path.Combine(layoutDir, "template-page");
var template= "template";
var Template= "Template";

string ReplaceTemplate(string text, string name)
{
    var Name = System.Globalization.CultureInfo.CurrentCulture.TextInfo.ToTitleCase(name).Replace("-", "");
    return text.Replace("template", name)
               .Replace("Template", Name)
               .Replace($"{name}Url:", "templateUrl:");
}

void NgCreateLayout(string name)
{
    if (string.IsNullOrEmpty(name)) 
        throw new Exception("ng create layout \"name\" is empty");
    name = name.ToLower();
    var createPageDir= System.IO.Path.Combine(layoutDir, $"{name}-page");
    if (!System.IO.Directory.Exists(createPageDir))
        System.IO.Directory.CreateDirectory(createPageDir);
    foreach(var file in System.IO.Directory.GetFiles(templatePageDir, "*.*"))
    {
        var templateFilename= System.IO.Path.GetFileName(file);
        var createFilename= System.IO.Path.Combine(createPageDir, ReplaceTemplate(templateFilename, name));
        var text= System.IO.File.ReadAllText(file);
        System.IO.File.WriteAllText(createFilename, ReplaceTemplate(text, name));
    }
}

Task("ng")
    .Does(()=> {
        switch(create)
        {
            case "layout":
                NgCreateLayout(name);
                break;
            default:
                throw new Exception("ng create=\"{layout}\" not found");
        }
    });

Task("DefaultNg")
    .IsDependentOn("Ng")
    .Does(()=> {
    });


#endregion

Task("Default")
    .IsDependentOn("DefaultBuild")
    // .IsDependentOn("DefaultNg")
    .Does(() => {
    });


// Build
// build.sh or build.ps1
// creates the DotNetCore with angular

// Add Build all Runtimes
// build.sh or build.ps1 --target=BuildAll

// Add Layout
// build.sh or build.ps1 --target=Ng --create=layout --name=abc
// Creates a abc-page in ClientApp/src/app/layout 
// add routing to ClientApp/src/app/layout-routing.module.ts
// { path: 'abc-page', loadChildren: ''./abc-page/abc-page.module#AbcPageModule'' },
// and add the layout to the navigation ClientApp/src/app/layout/components/sidebar/sidebar.component.html

RunTarget(target);