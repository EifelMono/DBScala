import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-upload-page',
    templateUrl: './upload-page.component.html',
    styleUrls: ['./upload-page.component.scss'],
    animations: [routerTransition()]
})
export class UploadPageComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
