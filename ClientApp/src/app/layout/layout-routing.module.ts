import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'articles-page', loadChildren: './articles-page/articles-page.module#ArticlesPageModule' },
            { path: 'tenants-page', loadChildren: './tenants-page/tenants-page.module#TenantsPageModule' },
            { path: 'upload-page', loadChildren: './upload-page/upload-page.module#UploadPageModule' },
            { path: 'template-page', loadChildren: './template-page/template-page.module#TemplatePageModule' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
