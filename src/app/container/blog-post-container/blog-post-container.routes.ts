import { Routes } from '@angular/router';

import { BlogPostContainerComponent } from './blog-post-container.component';

export const BLOG_POST_CONTAINER_ROUTES: Routes = [
  { path: ':id', component: BlogPostContainerComponent },
];
