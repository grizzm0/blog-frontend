import { Routes } from '@angular/router';
import { LayoutContainerComponent } from './layout-container.component';

export const LAYOUT_CONTAINER_ROUTES: Routes = [
  {
    path: '',
    component: LayoutContainerComponent,
    children: [
      {path: '', pathMatch: 'full', loadChildren: '../home-container/home-container.module#HomeContainerModule'},
      {path: 'blog/post', loadChildren: '../blog-post-container/blog-post-container.module#BlogPostContainerModule'},
    ],
  },
];
