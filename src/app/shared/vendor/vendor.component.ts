import { Component, OnInit, Input } from '@angular/core';
import { Vendor, VendorStatus } from 'src/app/models/vendor';
import { ActionSheetController } from '@ionic/angular';

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
    handler: () => this.onDispatchAction(VendorStatus.APPROVED)
  };
  private disabledOpt = {
    text: 'Deshabilitar',
    role: 'destructive',
    icon: 'close-outline',
    handler: () => this.onDispatchAction(VendorStatus.DISABLED)
  };
  private declinedOpt = {
    text: 'Declinar',
    role: 'destructive',
    icon: 'trash-bin-outline',
    handler: () => this.onDispatchAction(VendorStatus.DECLINED)
  };
  private buttons = {
    [VendorStatus.PENDING]: [ this.approvedOpt, this.disabledOpt, this.declinedOpt ],
    [VendorStatus.APPROVED]: [ this.disabledOpt ],
    [VendorStatus.DISABLED]: [ this.approvedOpt ]
  };

  constructor(
    private actionSheetController: ActionSheetController
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

  onDispatchAction(action: string) {
    if (action !== VendorStatus.APPROVED) {
      // Open modal to sen feedback
    }
  }

}
