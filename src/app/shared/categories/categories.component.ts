import { Component, OnInit, Input } from '@angular/core';

import { CategoriesService } from '../services/categories.service';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {

  @Input() isAdmin: boolean = false;
  categories: Category[] = [];

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.categoriesService.getCategories().subscribe( response => {
      this.categories = response;
    });
  }

}
