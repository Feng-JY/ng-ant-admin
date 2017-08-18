import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
// import { AuthGuard } from 'app/base';

const routes: Routes = [
  {
    path: 'index',
    component: MainComponent, 
    // canActivate: [AuthGuard],
    children: [
      {
        path: '',
        // canActivateChild: [AuthGuard],  
        children: [    
          { path: '', redirectTo: 'dashboard', pathMatch: 'full' },  
          { path: 'dashboard', loadChildren: '../modules/dashboard/dashboard.module#DashboardModule' },
          { path: 'user', loadChildren: '../modules/user/user.module#UserModule' },          ]
      }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'index', pathMatch: 'full' }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
