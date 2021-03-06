import { Component } from '@angular/core';
import { VendorService } from '../../shared/services/vendor.service';
import { VendorRequest, EVendorRequestStatus } from 'src/app/models/vendor-request';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriesService } from 'src/app/shared/services/categories.service';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/category';
import { ToastController } from '@ionic/angular';
import { Vendor } from 'src/app/models/vendor';


@Component({
  selector: 'app-register-vendor',
  templateUrl: 'register-vendor.component.html',
  styleUrls: ['register-vendor.component.scss']
})
export class RegisterVendorComponent {

  renderForm = false;
  vendorRequest: VendorRequest = null;
  isResubmit = false;
  registerFormGroup: FormGroup;
  categories$: Observable<Category[]> = this.categoriesService.getCategories();

  constructor(
    private vendorService: VendorService,
    private router: Router,
    private formBuilder: FormBuilder,
    private categoriesService: CategoriesService,
    private toastController: ToastController) {
  }

  ionViewWillEnter() {
      this.renderForm = false;
      this.isResubmit = false;
      this.vendorService.setVendor();
      this.vendorService.getVendorRequest().subscribe(vendorRequest => {
        if (vendorRequest) {
          // if is new. render form
          if (Object.keys(vendorRequest).length === 0) {
            this.renderForm = true;
            this.createForm();
          } else {
            // it has status approved. redirect
            if (vendorRequest.status === EVendorRequestStatus.APPROVED) {
              this.router.navigate(['/vendor/home']);
            }
          }
          // it is not new but has info. show request
          this.vendorRequest = vendorRequest;
        }
      });
  }

  private createForm(isResubmit = false) {
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
    if (isResubmit) {
      const {
        ruc,
        economic_activity,
        contributor_type,
        legal_representative,
        business_name,
        image,
        logo,
        slogan,
        mobile,
        category_id } = this.vendorRequest.vendor;
      this.registerFormGroup.patchValue({
        ruc,
        economic_activity,
        contributor_type,
        legal_representative,
        business_name,
        image,
        logo,
        slogan,
        mobile,
        category_id });
    }
  }

  onSubmit() {
    const formDataVendor = this.createFormData(this.registerFormGroup.value);
    const subscription = this.isResubmit ?
      this.vendorService.updateVendor(formDataVendor, this.vendorRequest.vendor.id) : this.vendorService.createVendor(formDataVendor);
    subscription.subscribe(async () => {
      this.router.navigate(['']);
      const toast = await this.toastController.create({
        message: 'Tu solicitud está siendo procesada',
        duration: 2000
      });
      toast.present();
    }, async (error) => {
      Object.keys(error.errors).forEach(key => {
        const formField = this.registerFormGroup.controls[key];
        formField.setErrors({backendError: error.errors[key].join('. ')});
      });
      const toast = await this.toastController.create({
        message: 'Error al enviar los datos',
        color: 'danger',
        duration: 2000
      });
      toast.present();
    });
  }

  onFileChange(event, key): void {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => this.registerFormGroup.controls[key].setValue(file);
    }
  }

  createFormData(vendor: Vendor): FormData {
    const formDataVendor = new FormData();
    Object.keys(vendor).forEach(key => {
      formDataVendor.append(key, vendor[key]);
    });
    return formDataVendor;
  }

  resubmitRequest(): void {
    this.isResubmit = true;
    this.renderForm = true;
    this.createForm(true);
  }

}
