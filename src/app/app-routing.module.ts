import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'intro',
    pathMatch: 'full'
  },
  {
    path: 'intro',
    loadChildren: () => import('./pages/intro/intro.module').then(m => m.IntroPageModule)
  },
  {
    path: 'login',
    children: [
      {
        path: 'email',
        loadChildren: () => import('./pages/login-email/login-email.module').then( m => m.LoginEmailPageModule)
      },
      {
        path: 'intro',
        loadChildren: () => import('./pages/login-intro/login-intro.module').then( m => m.LoginIntroPageModule)
      },
      {
        path: 'lost-password',
        loadChildren: () => import('./pages/lost-password/lost-password.module').then( m => m.LostPasswordPageModule)
      }
    ]
  },
  {
    path: 'dashboard',    
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
