import { Component } from '@angular/core';
import { DsCarouselComponent } from '@design-system/components/ds-carousel/ds-carousel.component';

@Component({
  selector: 'app-carousel',
  imports: [DsCarouselComponent],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export default class CarouselComponent {}
