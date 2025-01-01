import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DsModalComponent } from '@design-system/components/ds-modal/ds-modal.component';
import { DsButtonComponent } from '@design-system/components/ds-button/ds-button.component';

@Component({
  selector: 'modal',
  imports: [DsModalComponent, DsButtonComponent],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ModalComponent {
  isModalOpen = false;

  handleClose() {
    this.isModalOpen = false;
  }

  handleSave() {
    console.log('Modal saved');
    this.isModalOpen = false;
  }
}
