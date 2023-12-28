import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'project-angular-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  @Output() back = new EventEmitter<boolean>();
  constructor() {
    // code here
  }

  backToLogIn():void {
    this.back.emit(true);
  }
}
