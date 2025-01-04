import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
  EventEmitter,
  inject,
  OnInit,
} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ThemeService } from '@design-system/services/theme.service';

@Component({
  selector: 'ds-dropdown',
  imports: [CommonModule],
  templateUrl: './ds-dropdown.component.html',
  styleUrls: ['./ds-dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DsDropdownComponent implements OnInit {
  public readonly themeService = inject(ThemeService);
  private readonly sanitizer = inject(DomSanitizer);

  @Input() label: string = '';
  @Input() options: { label: string; value: any; icon?: string }[] = [];
  @Input() selectedValue: any;
  @Input() disabled: boolean = false;
  @Input() showIconsOnly: boolean = false;
  @Input() additionalClass: string = '';
  @Input() dropdownPadding: string = '1rem';
  @Input() dropdownBorderRadius: string = '4px';
  @Input() dropdownBackground: string = '#fff';
  @Input() dropdownColor: string = '#000';
  @Input() dropdownBorder: string = '1px solid #ccc';
  @Output() selectedValueChange = new EventEmitter<any>();

  isOpen: boolean = false;

  ngOnInit(): void {
    console.log(this.label);
    console.log(this.options);
  }

  toggleDropdown(): void {
    if (!this.disabled) {
      this.isOpen = !this.isOpen;
    }
  }

  selectOption(option: any): void {
    this.selectedValue = option.value;
    this.selectedValueChange.emit(option.value);
    this.isOpen = false;
  }

  sanitizeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
