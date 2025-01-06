import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  Input,
  Renderer2,
  ViewChild,
  AfterViewInit,
} from '@angular/core';

import { ThemeService } from '@design-system/services/theme.service';

@Component({
  selector: 'ds-button',
  imports: [CommonModule],
  templateUrl: './ds-button.component.html',
  styleUrl: './ds-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DsButtonComponent implements AfterViewInit {
  public readonly themeService = inject(ThemeService);
  private readonly renderer = inject(Renderer2);

  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() btnClass: string = 'btn-primary';
  @Input() size: 'btn-sm' | 'btn-md' | 'btn-lg' = 'btn-md';
  @Input() block: boolean = false;
  @Input() outline: boolean = false;
  @Input() disabled: boolean = false;
  @Input() ariaLabel: string = '';
  @Input() iconSvg: string | null = null;

  // Nuevas entradas para personalización
  @Input() bgColor: string | null = null;
  @Input() textColor: string | null = null;
  @Input() borderRadius: string | null = null;

  @ViewChild('buttonElement', { static: false }) buttonElement!: ElementRef;
  @ViewChild('iconContainer', { static: false }) iconContainer!: ElementRef;

  ngAfterViewInit(): void {
    if (this.iconSvg && this.iconContainer) {
      this.iconContainer.nativeElement.innerHTML = this.iconSvg;
    }
    if (this.bgColor || this.textColor || this.borderRadius) {
      this.applyCustomStyles();
    }
  }

  get buttonClasses(): string[] {
    const themeClass = this.themeService.theme();
    const baseClass = this.outline
      ? `btn-outline-${this.btnClass.replace('btn-', '')}`
      : this.btnClass;
    return [
      'btn',
      baseClass,
      this.size,
      themeClass,
      this.block ? 'btn-block' : '',
      this.bgColor || this.textColor || this.borderRadius ? 'btn-custom' : '',
    ].filter(Boolean);
  }

  private applyCustomStyles(): void {
    const buttonElement = this.buttonElement.nativeElement;
    if (this.bgColor) {
      this.renderer.setStyle(buttonElement, 'background-color', this.bgColor);
      this.renderer.setStyle(buttonElement, 'border-color', this.bgColor);
    }
    if (this.textColor) {
      this.renderer.setStyle(buttonElement, 'color', this.textColor);
    }
    if (this.borderRadius) {
      this.renderer.setStyle(buttonElement, 'border-radius', this.borderRadius);
    }
  }
}
