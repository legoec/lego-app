import { Component, OnInit } from '@angular/core';
import { VendorActivityService } from 'src/app/shared/services/vendor_activity.service';
import { VendorService } from 'src/app/shared/services/vendor.service';
import { Router } from '@angular/router';
import { VendorActivity } from 'src/app/models/vendor-activity';

@Component({
  selector: 'app-new-service',
  templateUrl: './new-service.page.html',
  styleUrls: ['./new-service.page.scss'],
})
export class NewServicePage implements OnInit {

  constructor(
    private vendorActivityService: VendorActivityService,
    private vendorService: VendorService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubtmitService(service) {
    this.vendorService.getVendorInformation().subscribe(vendor => {
      const vendorActivity: VendorActivity = {
        ...service,
        vendor_id: vendor.id
      };
      this.vendorActivityService.addService(vendorActivity).subscribe(() => this.router.navigate(['/vendor/services']));
    });
  }

}
