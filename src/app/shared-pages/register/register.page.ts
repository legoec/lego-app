import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(
    private alertController: AlertController,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.getAuthError().subscribe(errorMessage => this.onError(errorMessage));
  }

  onSignIn(form) {
    if (form && form.value) {
      const payloadSignIn = {
        login: form.value.email,
        password: form.value.password,
        passwordConfirmation: form.value.confirm_password,
        name: form.value.name
      };
      this.authService.signIn(payloadSignIn);
    }
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
