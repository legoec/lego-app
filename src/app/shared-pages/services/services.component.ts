import { Component, OnInit, ViewChild } from '@angular/core';

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
  query: string;
  currentPage: number;

  constructor(
    private servicesService: ServicesService,
    private activatedRoute: ActivatedRoute,
    private categoryService: CategoriesService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.pipe(
      map(param => parseInt(param.id, 10))).subscribe(id => {
      this.servicesService.getServicesFromCategory(id).subscribe(servicesData => {
        this.services = servicesData.services;
      });
      this.categoryService.getCategory(id).subscribe(category => {
        this.category = category;
      });
    });
    this.currentPage = 1;
  }

  onSearch(query: string) {
    this.query = query;
    this.currentPage = 1;
    this.servicesService.getServicesFromCategory(this.category.id, query, this.currentPage).subscribe(servicesData => {
      this.services = servicesData.services;
    });
  }

  loadData(event) {
    this.currentPage = this.currentPage + 1;
    this.servicesService.getServicesFromCategory(this.category.id, this.query, this.currentPage).subscribe(servicesData => {
      this.services = this.services.concat(servicesData.services);
      if (this.services.length <= servicesData.total_count) {
        event.target.complete();
      } else {
        event.target.disabled = true;
      }
    });
  }

}
