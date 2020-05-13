import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Service } from 'src/app/models/service';
import { ServicesService } from 'src/app/shared/services/services.service';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.page.html',
  styleUrls: ['./service-details.page.scss'],
})
export class ServiceDetailsPage implements OnInit {
  service$: Observable<Service>;

  constructor(
    private servicesService: ServicesService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params.pipe(
      map(param => parseInt(param.id, 10))).subscribe(id => {
        this.service$ = this.servicesService.getService(id);
    });
  }

}
