import { Routes } from '@angular/router';
import PageNotFoundComponent from '@core/components/page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: 'design-system',
    title: 'EZHub | Design System',
    loadChildren: () => import('./design-system/design-system.routes'),
  },
  {
    path: '',
    redirectTo: 'design-system',
    pathMatch: 'full',
  },
  {
    path: '404',
    title: 'EZHub | 404',
    component: PageNotFoundComponent,
  },
  {
    path: '**',
    redirectTo: '404',
  },
];
