import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

import {MainComponent} from './site/components/main/main.component';
import {LoginComponent} from './auth/components/login/login.component';
import {DashboardComponent} from './admin/components/dashboard/dashboard.component';

const APP_ROUTES: Routes = [
  {path: 'admin', component: DashboardComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: MainComponent},
  {path: 'site', component: MainComponent},
  {path: 'products', component: MainComponent},
  {path: 'about', component: MainComponent},
  {path: 'contact', component: MainComponent},
  {path: '', component: MainComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES, {useHash:true});
