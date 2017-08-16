import { Routes } from '@angular/router';

export const VIEW_ROUTES: Routes = [
  {path: '', pathMatch: 'full', loadChildren: './layout/layout.module#LayoutModule'},
  {path: '404', loadChildren: './not-found/not-found.module#NotFoundModule'},
  {path: '**', redirectTo: '404'},
];
