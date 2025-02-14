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
      saveSurveyJson(
        "dantasuser.pythonanywhere.com",
        creator.JSON,
        saveNo,
        callback
      );
    }
    creator.text = window.localStorage.getItem("survey-json") || JSON.stringify(defaultJson);
  }
}


function saveSurveyJson(url: string | URL, json: object, saveNo: number, callback: Function) {
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    body: JSON.stringify(json)
  })
  .then(response => {
    if (response.ok) {
      callback(saveNo, true);
    } else {
      callback(saveNo, false);
    }
  })
  .catch(error => {
    callback(saveNo, false);
  });
}