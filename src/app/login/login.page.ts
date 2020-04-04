import { Component, OnInit } from '@angular/core';
import { AngularTokenService } from 'angular-token';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private tokenService: AngularTokenService,
    private alertController: AlertController,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit(form) {
    if (form && form.value) {
      this.tokenService.signIn({
        login: form.value.email,
        password: form.value.password
      }).subscribe(
        (resp) => {
          const { body: { data } } = resp;
          this.onSuccess(data);
        },
        error =>  this.onError(error)
      );
    }
  }

  onSuccess(data) {
    this.router.navigate(['/home']);
  }

  async onError(error) {
    const { error: { errors } } = error;
    const alert = await this.alertController.create({
      header: 'Ups.!',
      message: errors,
      buttons: ['Aceptar']
    });
    await alert.present();
  }

}
