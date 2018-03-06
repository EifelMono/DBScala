import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule as Ng2Charts } from 'ng2-charts';
import { FormsModule } from '@angular/forms';

import { UploadPageRoutingModule } from './upload-page-routing.module';
import { UploadPageComponent } from './upload-page.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, Ng2Charts, FormsModule, UploadPageRoutingModule, PageHeaderModule],
    declarations: [UploadPageComponent]
})
export class UploadPageModule {}
