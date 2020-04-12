import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private alertController: AlertController,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.getAuthError().subscribe(errorMessage => this.onError(errorMessage));
  }

  onSubmit(form) {
    if (form && form.value) {
      const payload = {
        login: form.value.email,
        password: form.value.password
      };
      this.authService.startAuthenticationUser(payload);
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
