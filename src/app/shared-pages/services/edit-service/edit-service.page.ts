import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/models/service';
import { ServicesService } from 'src/app/shared/services/services.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-edit-service',
  templateUrl: './edit-service.page.html',
  styleUrls: ['./edit-service.page.scss'],
})
export class EditServicePage implements OnInit {
  vendorActivity: Service;

  constructor(
    private servicesService: ServicesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    this.activatedRoute.params.pipe(
      map(param => parseInt(param.id, 10))).subscribe(id => {
        this.servicesService.getService(id).subscribe(vendorActivity => this.vendorActivity = vendorActivity);
    });
  }

  onSubtmitService(service) {
    this.vendorActivity = {
      ...this.vendorActivity,
      ...service
    };
    this.servicesService.updateService(this.vendorActivity).subscribe(async () => {
      this.router.navigate(['/vendor/services']);
      const toast = await this.toastController.create({
        message: 'Gracias por enviar tu recomendación',
        duration: 2000,
        color: 'success'
      });
      toast.present();
    }, async (error) => {
      const toast = await this.toastController.create({
        message: `Ha ocurrido un error. ${error}`,
        duration: 2000,
        color: 'danger'
      });
      toast.present();
    });
  }

}
