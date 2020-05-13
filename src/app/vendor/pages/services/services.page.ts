import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { VendorService } from 'src/app/shared/services/vendor.service';
import { Service } from 'src/app/models/service';

@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
})
export class ServicesPage implements OnInit {
  services$: Observable<Service>;

  constructor(private vendorService: VendorService) { }

  ngOnInit() {
    this.services$ = this.vendorService.getMyServices();
  }

}
