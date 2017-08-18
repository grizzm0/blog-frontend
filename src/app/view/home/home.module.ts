import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';

import { HOME_ROUTES } from './home.routes';
import { BlogPostListModule } from '../../blog/blog-post-list/blog-post-list.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(HOME_ROUTES),

    // Internal modules
    BlogPostListModule,
  ],
  declarations: [
    HomeComponent,
  ],
})
export class HomeModule { }
