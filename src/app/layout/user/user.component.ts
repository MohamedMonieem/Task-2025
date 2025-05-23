import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
@Input() isOpen = false;
@Output() isOpenChange = new EventEmitter<boolean>(false)

  closeSidebar() {
    this.isOpen = false;
    this.isOpenChange.emit(false);
  }

}
