import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesPageComponent } from './articles-page.component';

const routes: Routes = [
    {
        path: '',
        component: ArticlesPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ArticlesPageRoutingModule {}
