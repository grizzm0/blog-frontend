import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';

import { HOME_ROUTES } from './home.routes';
import { BlogPostModule } from '../../blog/blog-post/blog-post.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(HOME_ROUTES),

    BlogPostModule,
  ],
  declarations: [
    HomeComponent,
  ],
})
export class HomeModule { }
