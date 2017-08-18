import { Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

export const LAYOUT_ROUTES: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {path: '', pathMatch: 'full', loadChildren: '../home/home.module#HomeModule'},
      {path: 'blog/post', loadChildren: '../view-blog-post/view-blog-post.module#ViewBlogPostModule'},
    ],
  },
];
