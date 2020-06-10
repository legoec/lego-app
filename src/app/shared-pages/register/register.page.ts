import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerFormGroup: FormGroup;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    this.authService.getSignUpError().subscribe(errors => this.onError(errors));
    this.registerFormGroup = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.compose([
        Validators.required,
        Validators.email
      ])],
      password: ['', [Validators.required, Validators.minLength(6)]],
      password_confirmation: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSignIn() {
    const payloadSignIn = {
      name: this.registerFormGroup.value.name,
      login: this.registerFormGroup.value.email,
      password: this.registerFormGroup.value.password,
      passwordConfirmation: this.registerFormGroup.value.password_confirmation,
    };
    this.authService.signIn(payloadSignIn);
  }

  async onError(errors: {}) {
    Object.keys(errors).forEach(key => {
      const formField = this.registerFormGroup.controls[key];
      formField.setErrors({backendError: errors[key].join('. ')});
    });
    const toast = await this.toastController.create({
      message: 'Error al enviar los datos',
      color: 'danger',
      duration: 2000
    });
    toast.present();
  }
}
