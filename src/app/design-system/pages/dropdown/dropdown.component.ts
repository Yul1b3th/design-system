import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DsDropdownComponent } from '@design-system/components/ds-dropdown/ds-dropdown.component';

@Component({
  selector: 'dropdown',
  imports: [DsDropdownComponent],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DropdownComponent {}
