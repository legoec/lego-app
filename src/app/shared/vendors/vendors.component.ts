import { Component, OnInit, Input } from '@angular/core';
import { VendorRequestService } from '../services/vendor_request';
import { Observable } from 'rxjs';
import { VendorRequest } from 'src/app/models/vendor-request';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.scss'],
})
export class VendorsComponent implements OnInit {
  @Input() isAdmin = false;
  vendorRequests$: Observable<VendorRequest[]>;

  constructor(
    private vendorRequestService: VendorRequestService
  ) { }

  ngOnInit() {
    this.vendorRequests$ = this.vendorRequestService.getVendorRequests();
  }

}
