import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { VendorActivity } from 'src/app/models/vendor-activity';

@Component({
  selector: 'app-service-form',
  templateUrl: './service-form.component.html',
  styleUrls: ['./service-form.component.scss'],
})
export class ServiceFormComponent implements OnInit {
  @Input() vendorActivity: VendorActivity;
  @Output() onSubmit: EventEmitter<VendorActivity> = new EventEmitter<VendorActivity>();
  serviceFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.serviceFormGroup = this.formBuilder.group({
      name: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      amount: ['', [Validators.required, Validators.min(0)]]
    });
  }

  submitForm() {
    this.vendorActivity = {
      ...this.vendorActivity,
      ...this.serviceFormGroup.value
    };
    this.onSubmit.emit(this.vendorActivity);
  }
}
