import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    NgIf,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  emailError: string = "";
  passwordError: string = "";

  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required])
    });
  }

  // emailFieldIsEmpty() {
  //   const errors = this.loginForm.controls["email"].errors || {};
  //   return errors["required"];
  // }

  // emailIsNotValid() {
  //   const errors = this.loginForm.controls["email"].errors || {};
  //   return errors["email"];
  // }

  updateEmailErrorMessage() {
    if (this.loginForm.controls["email"].hasError('required')) {
      this.emailError = 'Campo e-mail deve ser preenchido';
    } else if (this.loginForm.controls["email"].hasError('email')) {
      this.emailError = 'Campo e-mail inválido';
    } else {
      this.emailError = '';
    }
  }

  submitForm() {
    console.log(this.loginForm.valid);
  }
}
