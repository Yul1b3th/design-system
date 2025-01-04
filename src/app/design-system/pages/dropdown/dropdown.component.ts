import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { DsDropdownComponent } from '@design-system/components/ds-dropdown/ds-dropdown.component';
import { ThemeService } from '@design-system/services/theme.service';

@Component({
  selector: 'dropdown',
  imports: [DsDropdownComponent],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DropdownComponent {
  public readonly themeService = inject(ThemeService);
  selectedTheme = signal<string>('auto-mode');
}
