import { Component, OnInit, Input } from '@angular/core';
import { Vendor, VendorStatus } from 'src/app/models/vendor';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.scss'],
})
export class VendorsComponent implements OnInit {
  @Input() isAdmin: boolean = false;
  vendors: Vendor[] = [];

  constructor() { }

  ngOnInit() {
    this.vendors = [
      {
        economic_activity: 'Software Developer',
        legal_representative: 'Sultano de Loja',
        logo: 'https://cdn0.iconfinder.com/data/icons/occupation-002/64/freelance-nomad-occupation-avatar-512.png',
        slogan: 'Apasionado por la tecnologia, 5 años de experiencia',
        status: VendorStatus.PENDING
      },
      {
        economic_activity: 'Software Backend',
        legal_representative: 'Fulana de Tal',
        logo: 'https://cdn0.iconfinder.com/data/icons/occupation-001/64/designer-freelance-occupation-avatar-512.png',
        slogan: 'Apasionado por devops y con 2 años de experiencia en el lado del servidor',
        status: VendorStatus.APPROVED
      }
    ];
  }

}
