import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { ThemeService } from '@design-system/services/theme.service';

@Component({
  selector: 'ds-text-input',
  imports: [CommonModule],
  templateUrl: './ds-text-input.component.html',
  styleUrl: './ds-text-input.component.scss',
})
export class DsTextInputComponent {
  public readonly themeService = inject(ThemeService);

  @Input() id: string = '';
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() ariaRequired: boolean = false;
  @Input() disabled: boolean = false;
}
