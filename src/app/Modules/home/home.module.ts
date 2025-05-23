import { NgModule } from '@angular/core';
import { RegularTransactionsComponent } from './components/regular-transactions/regular-transactions.component';
import { ConfidentialTransactionsComponent } from './components/confidential-transactions/confidential-transactions.component';
import { LayoutComponent } from './components/layout/layout.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    LayoutComponent,
    RegularTransactionsComponent,
    ConfidentialTransactionsComponent,
  ],
  imports: [
    SharedModule,
    FormsModule,
    RouterModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }