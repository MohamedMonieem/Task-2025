

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfidentialTransactionsComponent } from './components/confidential-transactions/confidential-transactions.component';
import { LayoutComponent } from './components/layout/layout.component';
import { RegularTransactionsComponent } from './components/regular-transactions/regular-transactions.component';


const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      { path: '', redirectTo: 'regular', pathMatch: 'full' },

      { path: 'regular', component: RegularTransactionsComponent },
      { path: 'confidential', component: ConfidentialTransactionsComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
