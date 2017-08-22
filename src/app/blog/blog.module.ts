import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { BlogPostEffect } from './shared/effect/blog-post.effect';
import { BlogPostService } from './shared/service/blog-post.service';
import { BlogReducer } from './shared/reducer/blog.reducer';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([BlogPostEffect]),
    StoreModule.forFeature('blog', BlogReducer),
  ],
  providers: [
    BlogPostService,
  ],
})
export class BlogModule { }
