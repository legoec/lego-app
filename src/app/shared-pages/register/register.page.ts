import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
      confirm_password: ['', [Validators.required, Validators.minLength(6)]],
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

  async onError(errors: {}) {
    Object.keys(errors).forEach(key => {
      const formField = this.registerFormGroup.controls[key];
      formField.setErrors({'backendError': errors[key].join('. ')});
    });
  }
}
