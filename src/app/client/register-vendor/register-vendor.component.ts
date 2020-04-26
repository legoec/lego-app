import { Component } from '@angular/core';
import { VendorService } from '../../shared/services/vendor.service';
import { VendorRequest, EVendorRequestStatus } from 'src/app/models/vendor-request';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriesService } from 'src/app/shared/services/categories.service';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/category';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-register-vendor',
  templateUrl: 'register-vendor.component.html',
  styleUrls: ['register-vendor.component.scss']
})
export class RegisterVendorComponent {

  renderForm: boolean = false;
  vendorRequest: VendorRequest = null;
  registerFormGroup: FormGroup;
  categories$: Observable<Category[]>= this.categoriesService.getCategories();

  constructor(
    private vendorService: VendorService,
    private router: Router,
    private formBuilder: FormBuilder,
    private categoriesService: CategoriesService,
    private toastController: ToastController) {
  }

  ionViewWillEnter() {
      this.vendorService.setVendor();
      this.vendorService.getVendorRequest().subscribe(vendorRequest => {
        if(vendorRequest) {
          // if is new. render form
          if(Object.keys(vendorRequest).length === 0) {
            this.renderForm = true;
            this.createForm();
          } else {
            // it has status approved. redirect
            if(vendorRequest.status === EVendorRequestStatus.APPROVED) {
              this.router.navigate(['/vendor/home']);
            }
          }
          // it is not new but has info. show request
          this.vendorRequest = vendorRequest;
        }
      });
  }

  private createForm() {
    this.registerFormGroup = this.formBuilder.group({
      ruc: ['', Validators.required],
      economic_activity: ['', Validators.required],
      contributor_type: ['', Validators.required],
      legal_representative: ['', Validators.required],
      business_name: ['', Validators.required],
      image: [''],
      logo: [''],
      slogan: [''],
      mobile: ['', Validators.required],
      category_id: ['', Validators.required]
    });
  }

  onSubmit() {
    this.vendorService.createVendor(this.registerFormGroup.value).subscribe(async () => {
      this.router.navigate(['']);
      const toast = await this.toastController.create({
        message: 'Tu solicitud está siendo procesada!',
        duration: 2000
      });
      toast.present();
    }, error => {
      Object.keys(error.errors).forEach(key => {
        const formField = this.registerFormGroup.controls[key];
        formField.setErrors({'backendError': error.errors[key].join('. ')});
      });
    });
  }

}
