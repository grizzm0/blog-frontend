import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdCardModule, MdTooltipModule } from '@angular/material';
import { MomentModule } from 'angular2-moment';
import { RouterModule } from '@angular/router';

import { BlogModule } from '../blog.module';
import { BlogPostListComponent } from './blog-post-list.component';
import { BlogPostListItemComponent } from './blog-post-list-item/blog-post-list-item.component';
import { CoreModule } from '../../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    MdCardModule,
    MdTooltipModule,
    MomentModule,
    RouterModule,

    // Internal modules
    BlogModule,
    CoreModule,
  ],
  declarations: [
    BlogPostListComponent,
    BlogPostListItemComponent,
  ],
  exports: [
    BlogPostListComponent,
  ],
})
export class BlogPostListModule { }
