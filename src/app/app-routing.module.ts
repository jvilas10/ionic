import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  
  { path: 'search-for-load', loadChildren: './search-for-load/search-for-load.module#SearchForLoadPageModule' },
  { path: 'terminal-details', loadChildren: './terminal-details/terminal-details.module#TerminalDetailsPageModule' },
  { path: 'my-documents', loadChildren: './my-documents/my-documents.module#MyDocumentsPageModule' },
  { path: 'suggested-apps', loadChildren: './suggested-apps/suggested-apps.module#SuggestedAppsPageModule' },
  { path: 'my-assingned-loads', loadChildren: './my-assingned-loads/my-assingned-loads.module#MyAssingnedLoadsPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
