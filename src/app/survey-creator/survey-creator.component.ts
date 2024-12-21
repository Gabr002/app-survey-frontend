import { Component, OnInit } from '@angular/core';
import { ICreatorOptions, SurveyCreatorModel } from "survey-creator-core";
import { SurveyCreatorModule } from 'survey-creator-angular';

const creatorOptions: ICreatorOptions = {
  showLogicTab: false,
  showDesignerTab: false,
  showJSONEditorTab: false,
  isAutoSave: true
};

const defaultJson = {
  pages: [{
    name: "Name",
    elements: [{
      name: "FirstName",
      title: "Enter your first name:",
      type: "text"
    }, {
      name: "LastName",
      title: "Enter your last name:",
      type: "text"
    }]
  }]
};

@Component({
  selector: 'app-survey-creator',
  standalone: true,
  imports: [ SurveyCreatorModule ],
  templateUrl: './survey-creator.component.html',
  styleUrl: './survey-creator.component.css'
})

export class SurveyCreatorComponent implements OnInit {
  surveyCreatorModel: SurveyCreatorModel = new SurveyCreatorModel(creatorOptions);
  ngOnInit() {
    const creator = new SurveyCreatorModel(creatorOptions);
    this.surveyCreatorModel = creator;

    creator.saveSurveyFunc = (saveNo: number, callback: Function) => { 
      // If you use localStorage:
      window.localStorage.setItem("survey-json", creator.text);
      callback(saveNo, true);
    }
    creator.text = window.localStorage.getItem("survey-json") || JSON.stringify(defaultJson);
  }
}

