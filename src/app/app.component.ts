import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SurveyCreatorModule } from 'survey-creator-angular';
import { survayComponent } from './survay/survay.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, LoginComponent, SurveyCreatorModule, survayComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}
