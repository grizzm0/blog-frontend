import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { VIEW_BLOG_POST_ROUTES } from './view-blog-post.routes';
import { BlogModule } from '../../blog/blog.module';
import { BlogPostModule } from '../../blog/blog-post/blog-post.module';
import { ViewBlogPostComponent } from './view-blog-post.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(VIEW_BLOG_POST_ROUTES),

    // Internal modules
    BlogModule,
    BlogPostModule,
  ],
  declarations: [
    ViewBlogPostComponent,
  ],
})
export class ViewBlogPostModule { }
