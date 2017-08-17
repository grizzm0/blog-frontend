import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarkdownComponent } from './markdown/markdown.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    MarkdownComponent,
  ],
  exports: [
    MarkdownComponent,
  ],
})
export class CoreModule { }
