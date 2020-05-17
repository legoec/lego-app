import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.page.html',
  styleUrls: ['./password-reset.page.scss'],
})
export class PasswordResetPage implements OnInit {
  resetFormGroup: FormGroup;

  constructor(
    private alertController: AlertController,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.resetFormGroup = this.formBuilder.group({
      password: ['', Validators.required],
      confirm_password: ['', Validators.required]
    });
  }

  onSubmit() {
    const password = this.resetFormGroup.value.password;
    const confirmPassword = this.resetFormGroup.value.confirm_password;
    this.authService.updatePassword(password, confirmPassword).subscribe(
      (resp: any) => {
        this.showAlert('En Hora buena', resp.message);
        this.router.navigateByUrl('login');
      },
      ({ error }) => this.showAlert('Ups!', error.erros)
    );
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['Aceptar']
    });
    await alert.present();
  }

}
