import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'project-angular-web-not-found',
  templateUrl: './web-not-found.component.html',
  styleUrls: ['./web-not-found.component.scss'],
})
export class WebNotFoundComponent {
  constructor(private router: Router) {}

  rollback(): void {
    // code here
  }
}
