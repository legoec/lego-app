import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-password-recover',
  templateUrl: './password-recover.page.html',
  styleUrls: ['./password-recover.page.scss'],
})
export class PasswordRecoverPage implements OnInit {
  recoverFormGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    this.recoverFormGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  async onSubmit() {
    if (this.recoverFormGroup.valid) {
      const email = this.recoverFormGroup.value.email;
      this.authService.resetPassword(email).subscribe();
      this.router.navigateByUrl('login');
      const toast = await this.toastController.create({
        message: 'Tu solicitud está siendo procesada.',
        duration: 2000
      });
      toast.present();
    }
  }

}
