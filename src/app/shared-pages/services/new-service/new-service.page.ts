import { Component, OnInit } from '@angular/core';
import { VendorService } from 'src/app/shared/services/vendor.service';
import { Router } from '@angular/router';
import { Service } from 'src/app/models/service';
import { ServicesService } from 'src/app/shared/services/services.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-new-service',
  templateUrl: './new-service.page.html',
  styleUrls: ['./new-service.page.scss'],
})
export class NewServicePage implements OnInit {

  constructor(
    private servicesService: ServicesService,
    private vendorService: VendorService,
    private router: Router,
    private toastController: ToastController
  ) { }

  ngOnInit() {
  }

  onSubtmitService(service) {
    this.vendorService.getVendorInformation().subscribe(vendor => {
      const vendorActivity: Service = {
        ...service,
        vendor_id: vendor.id
      };
      this.servicesService.addService(vendorActivity).subscribe(async () => {
        this.router.navigate(['/vendor/services']);
        const toast = await this.toastController.create({
          message: 'Gracias por enviar tu recomendación',
          duration: 2000,
          color: 'success'
        });
        toast.present();
      });
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
