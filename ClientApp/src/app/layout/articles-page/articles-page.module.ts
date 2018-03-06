import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule as Ng2Charts } from 'ng2-charts';
import { FormsModule } from '@angular/forms';

import { ArticlesPageRoutingModule } from './articles-page-routing.module';
import { ArticlesPageComponent } from './articles-page.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, Ng2Charts, FormsModule, ArticlesPageRoutingModule, PageHeaderModule],
    declarations: [ArticlesPageComponent]
})
export class ArticlesPageModule {}
