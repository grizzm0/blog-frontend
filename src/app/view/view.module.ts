import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { VIEW_ROUTES } from './view.routes';
import { ViewComponent } from './view.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(VIEW_ROUTES),
  ],
  declarations: [
    ViewComponent,
  ],
  exports: [
    ViewComponent,
  ],
})
export class ViewModule { }
