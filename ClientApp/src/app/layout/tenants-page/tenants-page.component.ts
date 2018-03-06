import { Component, OnInit, Inject } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-tenants-page',
    templateUrl: './tenants-page.component.html',
    styleUrls: ['./tenants-page.component.scss'],
    animations: [routerTransition()]
})
export class TenantsPageComponent implements OnInit {
    public tableResult: TableResult[];

    constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
    }

    ngOnInit() {
        this.GetTenants()
    }


    GetTenants()
    {
        this.http.get<TableResult[]>(this.baseUrl + 'api/db/gettenants').subscribe(result => {
            this.tableResult = result;
          }, error => console.error(error));
    }
}

export class TableResult {
    data:      Data[];
    pageIndex: number;
    pageSize:  number;
    pages:     number;
}

export class Data {
    stockList: null;
    code:      string;
    codeType:  number;
    name:      string;
    pseudo:    number;
    typ:      string;
    unit:      string;
    id:        number;
}