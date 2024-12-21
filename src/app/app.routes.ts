import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SurveyCreatorComponent } from './survey-creator/survey-creator.component';
import { PreviewComponent } from './preview/preview.component';

export const routes: Routes = [
  {
    path: "", component: PreviewComponent
  },
  {
    path: "login", component: LoginComponent,
  },
  {
    path: "survey", component: SurveyCreatorComponent
  }
];
