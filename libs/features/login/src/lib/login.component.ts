import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'project-angular-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  isRegister = false;

  constructor() {
    // code here
  }
  onLogin(): void {
    // code here
  }

  signIn(): void {
    this.isRegister = true;
  }

  backToLogin(e: boolean) {
    this.isRegister = false;
  }
}
