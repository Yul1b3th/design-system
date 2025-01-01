import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  inject,
} from '@angular/core';
import { ThemeService } from '@design-system/services/theme.service';

@Component({
  selector: 'ds-dropdown',
  imports: [CommonModule],
  templateUrl: './ds-dropdown.component.html',
  styleUrls: ['./ds-dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DsDropdownComponent {
  public readonly themeService = inject(ThemeService);

  @Input() label: string = '';
  @Input() options: { label: string; value: any }[] = [];
  @Input() selectedValue: any;
  @Input() disabled: boolean = false;

  isOpen: boolean = false;

  toggleDropdown(): void {
    if (!this.disabled) {
      this.isOpen = !this.isOpen;
    }
  }

  selectOption(option: any): void {
    this.selectedValue = option;
    this.isOpen = false;
  }
}
