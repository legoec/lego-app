import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Service } from 'src/app/models/service';
import { map } from 'rxjs/operators';
import { ServicesService } from 'src/app/shared/services/services.service';
import { Category } from 'src/app/models/category';
import { CategoriesService } from 'src/app/shared/services/categories.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesPageComponent implements OnInit {

  services: Service[];
  category: Category;

  constructor(
    private servicesService: ServicesService,
    private activatedRoute: ActivatedRoute,
    private categoryService: CategoriesService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.pipe(
      map(param => parseInt(param.id))).subscribe(id => {
      this.servicesService.getServicesFromCategory(id).subscribe(services => {
        this.services = services;
      });
      this.categoryService.getCategory(id).subscribe(category => {
        this.category = category;
      });
    });
  }

  onSearch(query: string) {
    this.servicesService.getServicesFromCategory(this.category.id, query).subscribe(services => {
      this.services = services;
    });
  }

}
