import { Routes } from '@angular/router';

import { ViewBlogPostComponent } from './view-blog-post.component';

export const VIEW_BLOG_POST_ROUTES: Routes = [
  { path: ':id', component: ViewBlogPostComponent },
];
