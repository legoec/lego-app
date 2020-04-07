import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Store } from '@ngrx/store';

import { AppState, selectAuthState } from '../store/app.states';
import { LogIn } from '../store/actions/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private alertController: AlertController,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.store.select(selectAuthState).subscribe((state) => {
      if(state.errorMessage) {
        this.onError(state.errorMessage);
      }
    });
  }

  onSubmit(form) {
    if (form && form.value) {
      const payload = {
        login: form.value.email,
        password: form.value.password
      }
      this.store.dispatch(new LogIn(payload));
    }
  }

  async onError(error) {
    const alert = await this.alertController.create({
      header: 'Ups.!',
      message: error,
      buttons: ['Aceptar']
    });
    await alert.present();
  }

}
