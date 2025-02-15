import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-survay',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './survay.component.html',
  styleUrls: ['./survay.component.css']
})
export class survayComponent {
  surveyForm: FormGroup = new FormGroup({});
  scores = Array.from({ length: 10 }, (_, i) => i + 1);
  successMessage: string = '';

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit(){
    this.surveyForm = this.formBuilder.group({
      score: ['', Validators.required],
      comment: ['', [Validators.required, Validators.minLength(5)]]
    })    
  }

  async onSubmitSurvay() {
    const number = this.surveyForm.get('score')?.value;
    const description = this.surveyForm.get('comment')?.value;

    await this.http.post('http://localhost:8000/api-auth/survey', {
      number,
      description,
    }).subscribe({
      next: (res: any) => {
        if (res.access) {
          localStorage.setItem('token', res);
        }
      },
      error: (err) => {
        console.error('Erro ao fazer o comentário:', err);
      }
    })
  }
}



