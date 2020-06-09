import { Component, OnInit, Input } from '@angular/core';

import { CategoriesService } from '../services/categories.service';
import { Category } from 'src/app/models/category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {

  @Input() isAdmin = false;
  categories: Category[] = [];
  placeholders = [1, 2, 3, 4, 5];
  constructor(
    private categoriesService: CategoriesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.categoriesService.getCategories().subscribe( response => {
      this.categories = response;
    });
  }

  onAddCategory() {
    this.router.navigate(['/admin/categories/new']);
  }

}
