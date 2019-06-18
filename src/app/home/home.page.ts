import { Component } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(
    private router: Router,
   ) { 
  }
  searchForLoad(){
     this.router.navigateByUrl('/search-for-load');
  }
  terminalDetails(){
    this.router.navigateByUrl('/terminal-details');
  }
  myDocuments(){
    this.router.navigateByUrl('/my-documents');
  }
  suggestedApps(){
    this.router.navigateByUrl('/suggested-apps');
  }
  myAssingnedLoads(){
    this.router.navigateByUrl('/my-assingned-loads');
  }
}
