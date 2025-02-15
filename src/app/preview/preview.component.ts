import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-preview',
  standalone: true,
  imports: [],
  templateUrl: './preview.component.html',
  styleUrl: './preview.component.css'
})
export class PreviewComponent {
  constructor(private router: Router) {}

  onSubmitSignIn() {
    this.router.navigate(['SignIn']);
  }
  onSubmitSignUp() {
    this.router.navigate(['SignUp']);
  }
}
