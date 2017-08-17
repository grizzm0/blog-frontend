import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MdCardModule, MdTooltipModule } from '@angular/material';
import { MomentModule } from 'angular2-moment';

import { BlogPostService } from './shared/service/blog-post.service';
import { BlogPostListComponent } from './blog-post-list/blog-post-list.component';
import { BlogPostListItemComponent } from './blog-post-list-item/blog-post-list-item.component';
import { CoreModule } from '../../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MdCardModule,
    MdTooltipModule,
    MomentModule,

    CoreModule,
  ],
  declarations: [
    BlogPostListComponent,
    BlogPostListItemComponent,
  ],
  exports: [
    BlogPostListComponent,
  ],
  providers: [
    BlogPostService,
  ],
})
export class BlogPostModule { }
