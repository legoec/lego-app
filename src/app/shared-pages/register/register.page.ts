import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { AlertController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerFormGroup: FormGroup;

  constructor(
    private alertController: AlertController,
    private authService: AuthService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.authService.getAuthError().subscribe(errorMessage => this.onError(errorMessage));
    this.registerFormGroup = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.compose([
        Validators.required,
        Validators.email
      ])],
      password: ['', Validators.required],
      confirm_password: ['', Validators.compose([
        Validators.required
      ])],
    });
  }

  onSignIn() {
    const payloadSignIn = {
      name: this.registerFormGroup.value.name,
      login: this.registerFormGroup.value.email,
      password: this.registerFormGroup.value.password,
      passwordConfirmation: this.registerFormGroup.value.confirm_password,
    };
    this.authService.signIn(payloadSignIn);
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
