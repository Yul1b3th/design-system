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
  @Input() btnIcon: string | null = null; // Clase para el icono

  // Nuevas entradas para personalización
  @Input() textColor: string | null = null;
  @Input() bgColor: string | null = null;
  @Input() padding: string | null = null;
  @Input() fontSize: string | null = null;
  @Input() fontWeight: string | null = null;
  @Input() lineHeight: string | null = null;
  @Input() border: string | null = null;
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
      this.btnIcon ? this.btnIcon : '', // Solo incluir btnIcon si se ha proporcionado
      this.textColor ||
      this.bgColor ||
      this.padding ||
      this.fontSize ||
      this.fontWeight ||
      this.lineHeight ||
      this.border ||
      this.borderRadius
        ? 'btn-custom'
        : '',
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
    if (this.padding) {
      this.renderer.setStyle(buttonElement, 'padding', this.padding);
    }
    if (this.fontSize) {
      this.renderer.setStyle(buttonElement, 'font-size', this.fontSize);
    }
    if (this.fontWeight) {
      this.renderer.setStyle(buttonElement, 'font-weight', this.fontWeight);
    }
    if (this.lineHeight) {
      this.renderer.setStyle(buttonElement, 'line-height', this.lineHeight);
    }
    if (this.border) {
      this.renderer.setStyle(buttonElement, 'border', this.border);
    }
    if (this.borderRadius) {
      this.renderer.setStyle(buttonElement, 'border-radius', this.borderRadius);
    }
  }
}
