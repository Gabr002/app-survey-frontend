import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @Output() loginSuccess = new EventEmitter<void>();

  constructor(private router: Router) {}

  onSubmitSignIn() {
    // Supondo que o login foi bem-sucedido
    this.loginSuccess.emit();
    this.router.navigate(['survey']);
  }
}
