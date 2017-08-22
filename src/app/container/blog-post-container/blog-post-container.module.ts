import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BLOG_POST_CONTAINER_ROUTES } from './blog-post-container.routes';
import { BlogModule } from '../../blog/blog.module';
import { BlogPostModule } from '../../blog/blog-post/blog-post.module';
import { BlogPostContainerComponent } from './blog-post-container.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(BLOG_POST_CONTAINER_ROUTES),

    // Internal modules
    BlogModule,
    BlogPostModule,
  ],
  declarations: [
    BlogPostContainerComponent,
  ],
})
export class BlogPostContainerModule { }
