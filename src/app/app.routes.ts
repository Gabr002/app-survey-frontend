import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PreviewComponent } from './preview/preview.component';
import { survayComponent } from './survay/survay.component';

export const routes: Routes = [
  {
    path: "", component: PreviewComponent
  },
  {
    path: "SignIn", component: LoginComponent,
  },
  {
    path: "survey", component: survayComponent
  }
];
