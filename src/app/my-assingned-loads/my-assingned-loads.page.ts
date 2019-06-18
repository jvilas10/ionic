import { Component, OnInit } from '@angular/core';
import {ApiService} from '../shared/service/api.service';
@Component({
  selector: 'app-my-assingned-loads',
  templateUrl: './my-assingned-loads.page.html',
  styleUrls: ['./my-assingned-loads.page.scss'],
})
export class MyAssingnedLoadsPage implements OnInit {

  constructor(public __apiService:ApiService) { }

  ngOnInit() {
  }

}
