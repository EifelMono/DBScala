import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule as Ng2Charts } from 'ng2-charts';
import { FormsModule } from '@angular/forms';

import { TenantsPageRoutingModule } from './tenants-page-routing.module';
import { TenantsPageComponent } from './tenants-page.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, Ng2Charts, FormsModule, TenantsPageRoutingModule, PageHeaderModule],
    declarations: [TenantsPageComponent]
})
export class TenantsPageModule {}
