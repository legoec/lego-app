import { Component, OnInit, Input } from '@angular/core';
import { Vendor, VendorStatus } from 'src/app/models/vendor';
import { VendorsService } from '../services/vendors.service';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.scss'],
})
export class VendorsComponent implements OnInit {
  @Input() isAdmin: boolean = false;
  vendors: Vendor[] = [];

  constructor(
    private vendorsService: VendorsService
  ) { }

  ngOnInit() {
    this.vendorsService.getVendors().subscribe( response => {
      this.vendors = response;
    });
  }

}
