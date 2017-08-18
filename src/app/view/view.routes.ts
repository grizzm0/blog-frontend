import { Routes } from '@angular/router';

export const VIEW_ROUTES: Routes = [
  {path: '', loadChildren: './layout/layout.module#LayoutModule'},
  {path: '404', loadChildren: './view-not-found/view-not-found.module#ViewNotFoundModule'},
  {path: '**', redirectTo: '404'},
];
