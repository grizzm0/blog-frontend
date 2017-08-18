import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdToolbarModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { LAYOUT_ROUTES } from './layout.routes';
import { LayoutComponent } from './layout.component';

@NgModule({
  imports: [
    CommonModule,
    MdToolbarModule,
    RouterModule.forChild(LAYOUT_ROUTES),
  ],
  declarations: [
    LayoutComponent,
  ],
})
export class LayoutModule { }
