import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogPostService } from './shared/service/blog-post.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    BlogPostService,
  ],
})
export class BlogModule { }
