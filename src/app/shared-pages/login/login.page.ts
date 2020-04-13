import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../../shared/services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginFormGroup: FormGroup;

  constructor(
    private alertController: AlertController,
    private authService: AuthService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.authService.getAuthError().subscribe(errorMessage => this.onError(errorMessage));
    this.loginFormGroup = this.formBuilder.group({
      email: ['', Validators.required],
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
    const alert = await this.alertController.create({
      header: 'Ups.!',
      message: error,
      buttons: ['Aceptar']
    });
    await alert.present();
  }

}
