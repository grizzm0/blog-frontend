import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewHomeComponent } from './view-home.component';
import { RouterModule } from '@angular/router';

import { VIEW_HOME_ROUTES } from './view-home.routes';
import { BlogPostListModule } from '../../blog/blog-post-list/blog-post-list.module';
import { BlogModule } from '../../blog/blog.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(VIEW_HOME_ROUTES),

    // Internal modules
    BlogModule,
    BlogPostListModule,
  ],
  declarations: [
    ViewHomeComponent,
  ],
})
export class ViewHomeModule { }
