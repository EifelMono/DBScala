import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-article-page',
    templateUrl: './article-page.component.html',
    styleUrls: ['./article-page.component.scss'],
    animations: [routerTransition()]
})
export class ArticlePageComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
