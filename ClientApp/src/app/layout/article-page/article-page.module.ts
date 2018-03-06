import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule as Ng2Charts } from 'ng2-charts';
import { FormsModule } from '@angular/forms';

import { ArticlePageRoutingModule } from './article-page-routing.module';
import { ArticlePageComponent } from './article-page.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, Ng2Charts, FormsModule, ArticlePageRoutingModule, PageHeaderModule],
    declarations: [ArticlePageComponent]
})
export class ArticlePageModule {}
