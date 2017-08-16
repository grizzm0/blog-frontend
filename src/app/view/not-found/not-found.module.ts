import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found.component';
import { RouterModule } from '@angular/router';
import { NOT_FOUND_ROUTES } from './not-found.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(NOT_FOUND_ROUTES),
  ],
  declarations: [
    NotFoundComponent,
  ],
})
export class NotFoundModule { }
