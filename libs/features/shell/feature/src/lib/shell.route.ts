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
      (await import('@project-angular/features/login')).LoginModule,
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
