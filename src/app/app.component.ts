import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SurveyCreatorModule } from 'survey-creator-angular';
import { SurveyCreatorComponent } from './survey-creator/survey-creator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, LoginComponent, SurveyCreatorModule, SurveyCreatorComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}
