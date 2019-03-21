import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { FindPasswordComponent } from './find-password/find-password.component';
import { RegisterComponent } from './register/register.component';
import { PublicMessageComponent } from './public-message/public-message.component';

const routes: Routes = 
[
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'forgetPassword',
    component: FindPasswordComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'message',
    component: PublicMessageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
