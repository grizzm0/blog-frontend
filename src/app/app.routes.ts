import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {path: '', loadChildren: './container/layout-container/layout-container.module#LayoutContainerModule'},
  {path: '404', loadChildren: './container/not-found-container/not-found-container.module#NotFoundContainerModule'},
  {path: '**', redirectTo: '404'},
];
