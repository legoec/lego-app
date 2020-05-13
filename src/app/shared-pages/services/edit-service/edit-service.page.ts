import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/models/service';
import { ServicesService } from 'src/app/shared/services/services.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-edit-service',
  templateUrl: './edit-service.page.html',
  styleUrls: ['./edit-service.page.scss'],
})
export class EditServicePage implements OnInit {
  vendorActivity: Service;

  constructor(
    private servicesService: ServicesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.params.pipe(
      map(param => parseInt(param.id, 10))).subscribe(id => {
        this.servicesService.getService(id).subscribe(vendorActivity => this.vendorActivity = vendorActivity);
    });
  }

  onSubtmitService(service) {
    this.vendorActivity = {
      ...this.vendorActivity,
      ...service
    };
    this.servicesService.updateService(this.vendorActivity).subscribe(() => this.router.navigate(['/vendor/services']));
  }

}
