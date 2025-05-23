import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncomingRoutingModule } from './Incoming.routing.module';
import { IncomingComponent } from './components/incoming/incoming.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    IncomingComponent
  ],
  imports: [
    IncomingRoutingModule,
    SharedModule,
    TableModule,
    FormsModule,
    CheckboxModule
  ]
})
export class IncomingModule { }
