import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/shared/services/categories.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/models/category';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss'],
})
export class EditCategoryComponent implements OnInit {

  category: Category;

  constructor(
    private categoriesService: CategoriesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params.pipe(
      map(param => parseInt(param.id, 10))).subscribe(id => {
      this.categoriesService.getCategory(id).subscribe(category => {
        this.category = category;
      });
    });
  }

  onSubmit(category: Category) {
    this.categoriesService.updateCategory(category.id, category).subscribe(() => this.router.navigate(['/admin/categories']));
  }
}
