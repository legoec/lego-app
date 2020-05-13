import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { VendorService } from 'src/app/shared/services/vendor.service';
import { Service } from 'src/app/models/service';
import { Store } from '@ngrx/store';
import { AppState, getVendorRequest } from 'src/app/store/app.states';

@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
})
export class ServicesPage implements OnInit {
  services$: Observable<Service>;

  constructor(
    private vendorService: VendorService,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.store.select(getVendorRequest).subscribe(vendorRequest => {
      this.services$ = this.vendorService.getVendorServices(vendorRequest.vendor.id);
    });
  }

}
