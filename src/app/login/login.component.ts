import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  form: FormGroup = new FormGroup({});
  @Output() loginSuccess = new EventEmitter<void>();

  constructor(private router: Router, private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit(){
    this.form = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    })    
  }

  async onSubmitSignIn() {

    const username = this.form.get('email')?.value;
    const password = this.form.get('password')?.value;

    await this.http.post('http://localhost:8000/auth/jwt/create', {
      username,
      password,
    }).subscribe({
      next: (res:any) => {
        console.log(res.refresh);
        if (res.access) {
          localStorage.setItem('token', res.access); // Salva o token no localStorage
          this.loginSuccess.emit();
          this.router.navigate(['survey']);
        }
      },
      error: (err) => {
          console.error('Erro ao fazer login:', err);
      }
    });
  }
}
