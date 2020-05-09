import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-feedback',
  templateUrl: './modal-feedback.component.html',
  styleUrls: ['./modal-feedback.component.scss'],
})
export class ModalFeedbackComponent {
  feedback: string;

  constructor(private modalInstance: ModalController){
  }

  onSubmit():void {
    this.modalInstance.dismiss({
        feedback: this.feedback
    });
  }
}
