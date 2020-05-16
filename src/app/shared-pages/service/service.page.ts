import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/shared/services/services.service';
import { Observable } from 'rxjs';
import { Service } from 'src/app/models/service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { RecomendationsService } from 'src/app/shared/services/recomendations.service';
import { Recomendation } from 'src/app/models/recomendation';

@Component({
  selector: 'app-service-page',
  templateUrl: './service.page.html',
  styleUrls: ['./service.page.scss'],
})
export class ServicePage implements OnInit {
  service$: Observable<Service>;
  recomendations$: Observable<Recomendation[]>;

  constructor(
    private servicesService: ServicesService,
    private activatedRoute: ActivatedRoute,
    private recomendationsService: RecomendationsService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.pipe(
      map(param => parseInt(param.id, 10))).subscribe(id => {
        this.service$ = this.servicesService.getService(id);
        this.recomendations$ = this.recomendationsService.getRecomendationsFromService(id);
    });
  }

}
