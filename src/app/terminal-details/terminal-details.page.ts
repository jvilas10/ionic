import { Component, OnInit } from '@angular/core';
import {ApiService} from '../shared/service/api.service';
import { HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-terminal-details',
  templateUrl: './terminal-details.page.html',
  styleUrls: ['./terminal-details.page.scss'],
})
export class TerminalDetailsPage implements OnInit {

// tslint:disable-next-line: variable-name
  constructor(public _apiService: ApiService, private http: HttpClient) { }

  ngOnInit() {
    this.GetSettlementDetail();
  }

  GetSettlementDetail() {
    const params = { };
    this._apiService.get('load/GetTerminals', params).subscribe(
        (data) => {
           console.log(data);
        });

}
}
