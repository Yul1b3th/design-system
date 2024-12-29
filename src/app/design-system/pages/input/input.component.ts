import { Component } from '@angular/core';

import { DsTextInputComponent } from '@design-system/components/ds-input/ds-text-input/ds-text-input.component';

@Component({
  selector: 'page-input',
  imports: [DsTextInputComponent],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export default class InputComponent {}
