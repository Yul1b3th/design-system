import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DsAlertComponent } from '@design-system/components/ds-alert/ds-alert.component';

@Component({
  selector: 'alert',
  imports: [DsAlertComponent],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AlertComponent {}
