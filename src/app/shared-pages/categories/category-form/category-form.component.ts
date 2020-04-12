import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss'],
})
export class CategoryFormComponent implements OnInit {

  @Input() category: Category = {};
  @Output() onSubmit: EventEmitter<Category> = new EventEmitter<Category>();

  constructor() { }

  ngOnInit() {}

  submitForm() {
    this.onSubmit.emit(this.category);
  }
}
