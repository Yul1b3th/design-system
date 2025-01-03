import { ChangeDetectionStrategy, Component } from '@angular/core';

import { DsCardComponent } from '@design-system/components/ds-card/ds-card.component';

@Component({
  selector: 'card',
  imports: [DsCardComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CardComponent {}
