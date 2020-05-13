import { Component, OnInit } from '@angular/core';
import { VendorActivity } from 'src/app/models/vendor-activity';
import { Observable } from 'rxjs';
import { VendorService } from 'src/app/shared/services/vendor.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
})
export class ServicesPage implements OnInit {
  services$: Observable<VendorActivity>;

  constructor(private vendorService: VendorService) { }

  ngOnInit() {
    this.services$ = this.vendorService.getMyServices();
  }

}
