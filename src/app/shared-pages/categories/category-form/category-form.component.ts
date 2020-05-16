import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Category } from 'src/app/models/category';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss'],
})
export class CategoryFormComponent implements OnInit {

  @Input() category: Category = {};
  @Output() submitCallback: EventEmitter<Category> = new EventEmitter<Category>();
  categoryFormGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.categoryFormGroup = this.formBuilder.group({
      name: [this.category.name, Validators.required],
      percentage: [this.category.percentage, Validators.compose([
        Validators.required,
        Validators.min(0),
        Validators.max(100),
      ])],
      active: [!!this.category.active, Validators.required],
    });
  }

  submitForm() {
    this.category = {
      ...this.category,
      ...this.categoryFormGroup.value
    };
    this.submitCallback.emit(this.category);
  }
}
