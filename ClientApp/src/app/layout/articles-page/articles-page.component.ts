import { Component, OnInit, Inject } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-articles-page',
    templateUrl: './articles-page.component.html',
    styleUrls: ['./articles-page.component.scss'],
    animations: [routerTransition()]
})
export class ArticlesPageComponent implements OnInit {
    public searchArticle: string;
    public tableResult: TableResult[];

    constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
    }

    ngOnInit() {
        this.GetArticlesByName("");
    }

    GetArticlesByName(searchname: string)
    {
        this.GetArticlesByNamePI(searchname, 0);
    }

    GetArticlesByNamePI(searchname: string, pageindex: number)
    {
        this.http.get<TableResult[]>(this.baseUrl + 'api/db/getarticlesbyname?searchname='+ searchname+ '&pageindex=0&pagesize=100').subscribe(result => {
            this.tableResult = result;
          }, error => console.error(error));
    }

    keyDownSearchArticle(event: KeyboardEvent) {
        if (event === null) {
          this.GetArticlesByName(this.searchArticle);
        }
        // tslint:disable-next-line:one-line
        else {
          if (event.keyCode === 13) {
            this.GetArticlesByName(this.searchArticle);
          }
        }
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