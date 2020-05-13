import { Component, OnInit } from '@angular/core';
import { VendorService } from 'src/app/shared/services/vendor.service';
import { Router } from '@angular/router';
import { Service } from 'src/app/models/service';
import { ServicesService } from 'src/app/shared/services/services.service';

@Component({
  selector: 'app-new-service',
  templateUrl: './new-service.page.html',
  styleUrls: ['./new-service.page.scss'],
})
export class NewServicePage implements OnInit {

  constructor(
    private servicesService: ServicesService,
    private vendorService: VendorService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubtmitService(service) {
    this.vendorService.getVendorInformation().subscribe(vendor => {
      const vendorActivity: Service = {
        ...service,
        vendor_id: vendor.id
      };
      this.servicesService.addService(vendorActivity).subscribe(() => this.router.navigate(['/vendor/services']));
    });
  }

}
