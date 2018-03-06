import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TenantsPageComponent } from './tenants-page.component';

const routes: Routes = [
    {
        path: '',
        component: TenantsPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TenantsPageRoutingModule {}
