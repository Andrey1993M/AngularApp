import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserAuthService } from './user-auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  loginForm: FormGroup; // Убедитесь, что это свойство определено

  constructor(private fb: FormBuilder, private authService: UserAuthService) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const username = this.loginForm.controls['username'].value;
      const password = this.loginForm.controls['password'].value;
      if (this.authService.login(username, password)) {
        // Успешная авторизация
      } else {
        // Неуспешная авторизация
      }
    }
  }
}