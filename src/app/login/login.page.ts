import { Component, OnInit } from '@angular/core';
import { AngularTokenService } from 'angular-token';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private tokenService: AngularTokenService,
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
    console.log('sucess', data);
  }

  onError(error) {
    console.log('error', error);
  }

}
