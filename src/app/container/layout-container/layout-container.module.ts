import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdToolbarModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { LAYOUT_CONTAINER_ROUTES } from './layout-container.routes';
import { LayoutContainerComponent } from './layout-container.component';

@NgModule({
  imports: [
    CommonModule,
    MdToolbarModule,
    RouterModule.forChild(LAYOUT_CONTAINER_ROUTES),
  ],
  declarations: [
    LayoutContainerComponent,
  ],
})
export class LayoutContainerModule { }
