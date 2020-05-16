import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Service } from 'src/app/models/service';

@Component({
  selector: 'app-service-form',
  templateUrl: './service-form.component.html',
  styleUrls: ['./service-form.component.scss'],
})
export class ServiceFormComponent implements OnInit {
  @Input() vendorActivity: Service = {};
  @Output() submitCallback: EventEmitter<Service> = new EventEmitter<Service>();
  serviceFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.serviceFormGroup = this.formBuilder.group({
      name: [this.vendorActivity.name, Validators.required],
      price: [this.vendorActivity.price, [Validators.required, Validators.min(0)]],
      amount: [this.vendorActivity.amount, [Validators.required, Validators.min(0)]]
    });
  }

  submitForm() {
    this.vendorActivity = {
      ...this.vendorActivity,
      ...this.serviceFormGroup.value
    };
    this.submitCallback.emit(this.vendorActivity);
  }
}
