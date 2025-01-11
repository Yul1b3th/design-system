import { Component } from '@angular/core';
import { DsCardSkeletonComponent } from '@design-system/components/ds-card/ds-card-skeleton/ds-card-skeleton.component';

@Component({
  selector: 'card-skeleton',
  imports: [DsCardSkeletonComponent],
  templateUrl: './card-skeleton.component.html',
  styleUrl: './card-skeleton.component.scss',
})
export default class CardSkeletonComponent {}
