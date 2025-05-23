import { NgModule } from '@angular/core';
import { NewClientComponent } from './components/new-client/new-client.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    NewClientComponent
  ],
  imports: [
    SharedModule
  ]
})
export class AddingModule { }
