import { Component } from '@angular/core';

import { DsButtonComponent } from '@design-system/components/ds-button/ds-button.component';
import { DsCardComponent } from '@design-system/components/ds-card/ds-card.component';

@Component({
  selector: 'card',
  imports: [DsCardComponent, DsButtonComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export default class CardComponent {}
