import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SecretComponent } from './secret/secret.component';
import { LogoutComponent } from './logout/logout.component';
import { AngularFireAuthGuard } from '@angular/fire/compat/auth-guard';
import {
  redirectLoggedInTo,
  redirectUnauthorizedTo,
} from '@angular/fire/auth-guard';

const authOnly = () => redirectUnauthorizedTo(['']);
const guestOnly = () => redirectLoggedInTo(['secret']);

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: guestOnly },
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: guestOnly },
  },
  {
    path: 'secret',
    component: SecretComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: authOnly },
  },
  { path: 'logout', component: LogoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
