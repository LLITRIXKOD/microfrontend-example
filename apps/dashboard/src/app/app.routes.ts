import { NxWelcome } from './nx-welcome';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'investor',
    loadChildren: () => import('investor/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: 'audit',
    loadChildren: () => import('audit/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: '',
    component: NxWelcome,
  },
];
