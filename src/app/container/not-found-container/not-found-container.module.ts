import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundContainerComponent } from './not-found-container.component';
import { RouterModule } from '@angular/router';
import { NOT_FOUND_CONTAINER_ROUTES } from './not-found-container.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(NOT_FOUND_CONTAINER_ROUTES),
  ],
  declarations: [
    NotFoundContainerComponent,
  ],
})
export class NotFoundContainerModule { }
