import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginFormGroup: FormGroup;
  passwordType: string;
  passwordIcon: string;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    this.passwordType = 'password';
    this.passwordIcon = 'eye-off';
    this.authService.getAuthError().subscribe(errorMessage => this.onError(errorMessage));
    this.loginFormGroup = this.formBuilder.group({
      email: ['', Validators.compose([
        Validators.required,
        Validators.email
      ])],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    const payload = {
      login: this.loginFormGroup.value.email,
      password: this.loginFormGroup.value.password
    };
    this.authService.startAuthenticationUser(payload);
  }

  async onError(error: string) {
    const toast = await this.toastController.create({
      message: error,
      color: 'danger',
      duration: 2000
    });
    toast.present();
  }

  hideShowPassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }

}
