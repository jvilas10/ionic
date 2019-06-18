import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SuggestedAppsPage } from './suggested-apps.page';

const routes: Routes = [
  {
    path: '',
    component: SuggestedAppsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SuggestedAppsPage]
})
export class SuggestedAppsPageModule {}
