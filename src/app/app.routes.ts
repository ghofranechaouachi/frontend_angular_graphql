import { Routes } from '@angular/router';
import { LoginComponent } from './pages/auths/login/login.component';
import { RegisterComponent } from './pages/auths/register/register.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent }
];
