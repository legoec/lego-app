import { Component, OnInit } from '@angular/core';
import { VendorService } from 'src/app/shared/services/vendor.service';
import { Vendor } from 'src/app/models/vendor';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/category';
import { CategoriesService } from 'src/app/shared/services/categories.service';
import { Router } from '@angular/router';
import { ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-edit-vendor-profile',
  templateUrl: './edit-vendor-profile.page.html',
  styleUrls: ['./edit-vendor-profile.page.scss'],
})
export class EditVendorProfilePage implements OnInit {

  vendor: Vendor;
  registerFormGroup: FormGroup;
  categories$: Observable<Category[]> = this.categoriesService.getCategories();

  constructor(
    private vendorService: VendorService,
    private formBuilder: FormBuilder,
    private categoriesService: CategoriesService,
    private router: Router,
    private toastController: ToastController,
    private alertController: AlertController
    ) { }

  ngOnInit() {
    this.vendorService.getVendorRequest().subscribe(vendorRequest => {
      this.vendor = vendorRequest.vendor;
      this.createForm(this.vendor);
    });
  }

  private createForm(vendor: Vendor) {
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
      category_id } = vendor;
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

  async onSubmit() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Atención!',
      message: 'Editar tu perfil deshabilitará temporalmente tu cuenta, hasta su revisión. Estás seguro?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
        }, {
          text: 'Ok',
          handler: () => this.submitForm()
        }
      ]
    });

    await alert.present();
  }

  private submitForm() {
    const formDataVendor = this.createFormData(this.registerFormGroup.value);
    this.vendorService.updateVendor(formDataVendor, this.vendor.id).subscribe(async () => {
      this.router.navigate(['']);
      const toast = await this.toastController.create({
        message: 'Tu solicitud está siendo procesada!. Por el momento tu perfil estará inactivo.',
        duration: 5000
      });
      toast.present();
    }, error => {
      Object.keys(error.errors).forEach(key => {
        const formField = this.registerFormGroup.controls[key];
        formField.setErrors({backendError: error.errors[key].join('. ')});
      });
    });
  }

  createFormData(vendor: Vendor): FormData {
    const formDataVendor = new FormData();
    Object.keys(vendor).forEach(key => {
      formDataVendor.append(key, vendor[key]);
    });
    return formDataVendor;
  }

}
