import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './core/layout/auth-layout/auth-layout.component';

export const routes: Routes = [
    {path: "auth", component: AuthLayoutComponent, children: [
        {path: "", loadComponent: ()=> import('./core/pages/register/register.component').then(c=> c.RegisterComponent)},
        {path: "login", loadComponent: ()=> import('./core/pages/login/login.component').then(c=> c.LoginComponent)},
        {path: "forgot-password", loadComponent: ()=> import('./core/pages/forgot-password/forgot-password.component').then(c=> c.ForgotPasswordComponent)},    
        {path: "reset-password", loadComponent: ()=> import('./core/pages/reset-password/reset-password.component').then(c=> c.ResetPasswordComponent)},    
        {path: "verify-code", loadComponent: ()=> import('./core/pages/verify-code/verify-code.component').then(c=> c.VerifyCodeComponent)},    
    ]},
    {path: '', loadComponent: ()=> import('../app/feature/pages/dashboard/dashboard.component').then(c=> c.DashboardComponent)}
];
