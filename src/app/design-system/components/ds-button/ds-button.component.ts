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
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { ThemeService } from '@design-system/services/theme.service';

@Component({
  selector: 'ds-button',
  imports: [CommonModule],
  templateUrl: './ds-button.component.html',
  styleUrl: './ds-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DsButtonComponent implements AfterViewInit {
  private themeService = inject(ThemeService);
  private sanitizer = inject(DomSanitizer);
  private renderer = inject(Renderer2);

  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() btnClass: string = 'btn-primary';
  @Input() size: 'btn-sm' | 'btn-md' | 'btn-lg' = 'btn-md';
  @Input() block: boolean = false;
  @Input() outline: boolean = false;
  @Input() disabled: boolean = false;
  @Input() ariaLabel: string = '';
  @Input() iconSvg: string | null = null; // Nueva entrada para el icono SVG

  @ViewChild('iconContainer', { static: false }) iconContainer!: ElementRef;

  ngAfterViewInit(): void {
    if (this.iconSvg && this.iconContainer) {
      this.iconContainer.nativeElement.innerHTML = this.iconSvg;
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
    ].filter(Boolean);
  }
}
