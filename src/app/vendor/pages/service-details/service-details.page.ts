import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { VendorActivity } from 'src/app/models/vendor-activity';
import { VendorActivityService } from 'src/app/shared/services/vendor_activity.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.page.html',
  styleUrls: ['./service-details.page.scss'],
})
export class ServiceDetailsPage implements OnInit {
  service$: Observable<VendorActivity>;

  constructor(
    private vendorActivityService: VendorActivityService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params.pipe(
      map(param => parseInt(param.id, 10))).subscribe(id => {
        this.service$ = this.vendorActivityService.getService(id);
    });
  }

}
