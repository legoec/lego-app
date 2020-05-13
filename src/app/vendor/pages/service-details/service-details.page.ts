import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { VendorActivity } from 'src/app/models/vendor-activity';
import { VendorActivityService } from 'src/app/shared/services/vendor_activity.service';
import { Router } from '@angular/router';
import { VendorService } from 'src/app/shared/services/vendor.service';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.page.html',
  styleUrls: ['./service-details.page.scss'],
})
export class ServiceDetailsPage implements OnInit {
  serviceFormGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private vendorActivityService: VendorActivityService,
    private vendorService: VendorService,
    private router: Router
  ) { }

  ngOnInit() {
    this.serviceFormGroup = this.formBuilder.group({
      name: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      amount: ['', [Validators.required, Validators.min(0)]]
    });
  }

  submitForm() {
    this.vendorService.getVendorInformation().subscribe(vendor => {
      const vendorActivity: VendorActivity = {
        name: this.serviceFormGroup.value.name,
        price: this.serviceFormGroup.value.price,
        amount: this.serviceFormGroup.value.amount,
        vendor_id: vendor.id
      };
      this.vendorActivityService.addService(vendorActivity).subscribe(() => this.router.navigate(['/vendor/services']));
    });
  }

}
