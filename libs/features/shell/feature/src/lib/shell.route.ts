import { Route } from '@angular/router';
export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '',
    loadChildren: async () =>
      (await import('@ha/features/login')).LoginModule,
  },
  // {
  //     path: '',
  //     component: MainViewComponent,
  //     children: [
  //         // {
  //         //     path: 'quan-tri',
  //         //     loadChildren: async() => await
  //         // }
  //     ]
  //   },
];
