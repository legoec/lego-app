import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/shared/services/services.service';
import { Observable, combineLatest } from 'rxjs';
import { Service } from 'src/app/models/service';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap } from 'rxjs/operators';
import { RecomendationsService } from 'src/app/shared/services/recomendations.service';
import { Recomendation } from 'src/app/models/recomendation';
import { AuthService } from 'src/app/shared/services/auth.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-service-page',
  templateUrl: './service.page.html',
  styleUrls: ['./service.page.scss'],
})
export class ServicePage implements OnInit {
  service$: Observable<Service>;
  recomendations$: Observable<Recomendation[]>;
  isAuthenticated$: Observable<boolean> = this.authService.isAuthenticated();
  recomendationForm: FormGroup;

  constructor(
    private servicesService: ServicesService,
    private activatedRoute: ActivatedRoute,
    private recomendationsService: RecomendationsService,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    this.activatedRoute.params.pipe(
      map(param => parseInt(param.id, 10))).subscribe(id => {
        this.service$ = this.servicesService.getService(id);
        this.recomendations$ = this.recomendationsService.getRecomendationsFromService(id);
        this.generateForm();
    });
  }

  generateForm() {
    this.recomendationForm = this.formBuilder.group({
      description: ['', Validators.required],
      ranking: ['', Validators.required]
    });
  }

  onSubmitRecomendationForm() {
    combineLatest([
      this.authService.getAuthenticadUser(),
      this.activatedRoute.params.pipe(
        map(param => parseInt(param.id, 10)))]).subscribe(([user, id]) => {
          const recomendation = this.recomendationForm.value;
          recomendation.user_id = user.id;
          recomendation.service_id = id;
          this.recomendationsService.createRecomendation(recomendation).subscribe(() => {
            this.toastController.create({
              message: 'Gracias por enviar tu recomendación!',
              duration: 2000,
              color: 'success'
            }).then(toast => {
              toast.present();
            });
          }, (error) => {
            this.toastController.create({
              message: `Ha ocurrido un error. ${error}`,
              duration: 2000,
              color: 'danger'
            }).then(toast => {
              toast.present();
            });
          });
        });
  }

}
