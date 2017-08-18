import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdCardModule, MdTooltipModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { MomentModule } from 'angular2-moment';

import { BlogPostComponent } from './blog-post.component';
import { CoreModule } from '../../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    MdCardModule,
    MdTooltipModule,
    MomentModule,
    RouterModule,

    // Internal modules
    CoreModule,
  ],
  declarations: [
    BlogPostComponent,
  ],
  exports: [
    BlogPostComponent,
  ],
})
export class BlogPostModule { }
