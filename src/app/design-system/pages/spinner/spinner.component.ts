import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DsSpinnerComponent } from '@design-system/components/ds-spinner/ds-spinner.component';

@Component({
  selector: 'spinner',
  imports: [DsSpinnerComponent],
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SpinnerComponent {}
