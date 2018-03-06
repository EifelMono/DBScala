import { Component, OnInit, Inject } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';

@Component({
    selector: 'app-upload-page',
    templateUrl: './upload-page.component.html',
    styleUrls: ['./upload-page.component.scss'],
    animations: [routerTransition()]
})
export class UploadPageComponent implements OnInit {
    fileToUpload: File = null;
    fileChangeEvent: any;

    constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
    }

    ngOnInit() { }

    onFileChange(event: any) {
        this.fileChangeEvent = event;
        let fi = event.srcElement;
        if (fi.files && fi.files[0]) {
            let fileToUpload = fi.files[0];

            let formData: FormData = new FormData();
            formData.append(fileToUpload.name, fileToUpload);

            const httpOptions = {
                headers: new HttpHeaders({
                    'Accept': 'application/json',
                })
            };

            this.http.post(this.baseUrl + "api/db/uploaddb/", formData, httpOptions)
                .subscribe(r => console.log(r));
        }
    }

    onUpload() {
        let fi = this.fileChangeEvent.srcElement;
        if (fi.files && fi.files[0]) {
            let fileToUpload = fi.files[0];

            let formData: FormData = new FormData();
            formData.append(fileToUpload.name, fileToUpload);

            const httpOptions = {
                headers: new HttpHeaders({
                    'Accept': 'application/json',
                })
            };

            this.http.post(this.baseUrl + "api/db/uploaddb/", formData, httpOptions)
                .subscribe(r => console.log(r));
        }
    }
}
