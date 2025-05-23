import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: '', loadChildren: () => import('./Modules/home/home.module').then(m => m.HomeModule) },
  { path: 'incoming', loadChildren: () => import('./Modules/Incoming/Incoming.module').then(m => m.IncomingModule) },
  { path: 'adding', loadChildren: () => import('./Modules/adding/adding.module').then(m => m.AddingModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
