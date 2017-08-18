import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { BlogModule } from '../blog.module';
import { BlogPostModule } from '../blog-post/blog-post.module';
import { BlogPostListComponent } from './blog-post-list.component';
import { BlogPostListItemComponent } from './blog-post-list-item/blog-post-list-item.component';
import { CoreModule } from '../../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,

    // Internal modules
    BlogModule,
    BlogPostModule,
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
