import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebNotFoundComponent } from './web-not-found.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: WebNotFoundComponent,
  },
];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [WebNotFoundComponent],
})
export class WebWebNotFoundModule {}
