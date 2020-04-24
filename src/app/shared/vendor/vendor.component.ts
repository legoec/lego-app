import { Component, OnInit, Input } from '@angular/core';
import { Vendor } from 'src/app/models/vendor';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.scss'],
})
export class VendorComponent implements OnInit {
  @Input() isAdmin: boolean = false;
  @Input() vendor: Vendor;

  constructor() { }

  ngOnInit() {}

}
