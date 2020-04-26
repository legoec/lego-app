import { Component, OnInit, Input } from '@angular/core';
import { Vendor } from 'src/app/models/vendor';
import { ActionSheetController } from '@ionic/angular';
import { EVendorRequestStatus, VendorRequest } from 'src/app/models/vendor-request';
import { VendorRequestService } from '../services/vendor_request';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.scss'],
})
export class VendorComponent implements OnInit {
  @Input() isAdmin: boolean = false;
  @Input() vendor: Vendor;

  private approvedOpt = {
    text: 'Habilitar',
    role: 'destructive',
    icon: 'checkmark-outline',
    handler: () => this.onDispatchAction(EVendorRequestStatus.APPROVED)
  };
  private disabledOpt = {
    text: 'Deshabilitar',
    role: 'destructive',
    icon: 'close-outline',
    handler: () => this.onDispatchAction(EVendorRequestStatus.DISABLED)
  };
  private declinedOpt = {
    text: 'Declinar',
    role: 'destructive',
    icon: 'trash-bin-outline',
    handler: () => this.onDispatchAction(EVendorRequestStatus.DECLINED)
  };
  private buttons = {
    [EVendorRequestStatus.PENDING]: [ this.approvedOpt, this.disabledOpt, this.declinedOpt ],
    [EVendorRequestStatus.APPROVED]: [ this.disabledOpt ],
    [EVendorRequestStatus.DISABLED]: [ this.approvedOpt ],
    [EVendorRequestStatus.DECLINED]: [ this.approvedOpt ],
  };
  private translationStatus = {
    [EVendorRequestStatus.PENDING]: 'Pendiente',
    [EVendorRequestStatus.APPROVED]: 'Aprobado',
    [EVendorRequestStatus.DISABLED]: 'Deshabilitado',
    [EVendorRequestStatus.DECLINED]: 'Declinado',
  };

  constructor(
    private actionSheetController: ActionSheetController,
    private vendorRequestService: VendorRequestService
  ) { }

  ngOnInit() {}

  async onShowMenuActions() {
    const actionSheet = await this.actionSheetController.create({
      buttons: [
        ...this.buttons[this.vendor.status],
        { text: 'Cancelar', role: 'cancel', icon: 'log-out-outline' }
      ]
    });

    await actionSheet.present();
  }

  onDispatchAction(status: EVendorRequestStatus): void {
    if (status !== EVendorRequestStatus.APPROVED) {
      // Open modal to send feedback
    }
    const vendorRequestParams = {
      status,
      feedback: '',
      vendor_id: this.vendor.id
    };
    this.vendorRequestService.sendRequest(vendorRequestParams)
      .subscribe((vendorRequest) => {
        this.vendor.status = vendorRequest.status;
      });
  }

}
