import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MyAssingnedLoadsPage } from './my-assingned-loads.page';

const routes: Routes = [
  {
    path: '',
    component: MyAssingnedLoadsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MyAssingnedLoadsPage]
})
export class MyAssingnedLoadsPageModule {}
