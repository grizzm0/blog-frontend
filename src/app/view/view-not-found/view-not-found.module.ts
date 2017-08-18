import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewNotFoundComponent } from './view-not-found.component';
import { RouterModule } from '@angular/router';
import { VIEW_NOT_FOUND_ROUTES } from './view-not-found.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(VIEW_NOT_FOUND_ROUTES),
  ],
  declarations: [
    ViewNotFoundComponent,
  ],
})
export class ViewNotFoundModule { }
