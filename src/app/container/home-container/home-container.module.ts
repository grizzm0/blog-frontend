import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeContainerComponent } from './home-container.component';
import { RouterModule } from '@angular/router';

import { HOME_CONTAINER_ROUTES } from './home-container.routes';
import { BlogPostListModule } from '../../blog/blog-post-list/blog-post-list.module';
import { BlogModule } from '../../blog/blog.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(HOME_CONTAINER_ROUTES),

    // Internal modules
    BlogModule,
    BlogPostListModule,
  ],
  declarations: [
    HomeContainerComponent,
  ],
})
export class HomeContainerModule { }
