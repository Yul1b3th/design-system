import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
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
}
