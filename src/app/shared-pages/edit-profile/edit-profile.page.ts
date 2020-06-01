import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserService } from 'src/app/shared/services/user.service';
import { AlertController } from '@ionic/angular';
import { AppState } from 'src/app/store/app.states';
import { Store } from '@ngrx/store';
import { UpdateUser } from 'src/app/store/actions/auth.actions';
import { Location } from '@angular/common';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
  userFormGroup: FormGroup;
  user: User;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private userService: UserService,
    private alertController: AlertController,
    private store: Store<AppState>,
    private location: Location,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    this.authService.getAuthenticadUser().subscribe(user => {
      this.user = user;
      this.userFormGroup = this.formBuilder.group({
        name: [this.user.name, Validators.required],
        nickname: [this.user.nickname],
        email: [this.user.email, [Validators.required, Validators.email]]
      });
    });
  }

  submitForm() {
    const user = {
      ...this.user,
      ...this.userFormGroup.value
    };
    this.userService.updateUser(this.user.id, this.userFormGroup.value).subscribe(
      resp => {
        this.store.dispatch(new UpdateUser({ user }));
        this.location.back();
        this.onSucces();
      }
      , error => this.onError(error.errors)
    );
  }

  async onError(error: string) {
    const alert = await this.alertController.create({
      header: 'Ups.!',
      message: error,
      buttons: ['Aceptar']
    });
    await alert.present();
  }

  async onSucces() {
    const toast = await this.toastController.create({
      message: 'Tu perfil ha sido actualizado!',
      duration: 2000
    });
    toast.present();
  }
}
