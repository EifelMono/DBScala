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
            { path: 'article-page', loadChildren: './article-page/article-page.module#ArticlePageModule' },
            { path: 'upload-page', loadChildren: './upload-page/upload-page.module#UploadPageModule' },
            { path: 'template-page', loadChildren: './template-page/template-page.module#TemplatePageModule' },
            { path: 'fetch-page', loadChildren: './fetch-page/fetch-page.module#FetchPageModule' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
