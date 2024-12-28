import { CommonModule } from '@angular/common';
import {
  AfterContentInit,
  Component,
  ContentChildren,
  ElementRef,
  inject,
  QueryList,
  Renderer2,
} from '@angular/core';
import { ThemeService } from '@design-system/services/theme.service';

@Component({
  selector: 'ds-card',
  imports: [CommonModule],
  templateUrl: './ds-card.component.html',
  styleUrl: './ds-card.component.scss',
})
export class DsCardComponent implements AfterContentInit {
  private readonly themeService = inject(ThemeService);
  private readonly renderer = inject(Renderer2);

  @ContentChildren('cardText', { read: ElementRef })
  cardTextElements!: QueryList<ElementRef>;
  @ContentChildren('cardTitle', { read: ElementRef })
  cardTitleElements!: QueryList<ElementRef>;
  @ContentChildren('cardPrice', { read: ElementRef })
  cardPriceElements!: QueryList<ElementRef>;
  @ContentChildren('cardButton', { read: ElementRef })
  cardButtonElements!: QueryList<ElementRef>;

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');

    this.cardTextElements.forEach((cardText) => {
      this.renderer.addClass(cardText.nativeElement, 'card-text');
      this.renderer.addClass(cardText.nativeElement, 'line-clamp-3');
    });

    this.cardTitleElements.forEach((cardTitle) => {
      this.renderer.addClass(cardTitle.nativeElement, 'card-title');
      this.renderer.addClass(cardTitle.nativeElement, 'line-clamp-1');
    });

    this.cardPriceElements.forEach((cardPrice) => {
      this.renderer.addClass(cardPrice.nativeElement, 'card-price');
    });
  }

  get themeClass(): string {
    return this.themeService.theme();
  }
}
