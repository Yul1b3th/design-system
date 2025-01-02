import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Signal,
  signal,
} from '@angular/core';
import { ThemeService } from '@design-system/services/theme.service';
import { CommonModule } from '@angular/common';
import { DesignSystemSidebarComponent } from '../design-system-sidebar/design-system-sidebar.component';

@Component({
  selector: 'design-system-header',
  imports: [CommonModule, DesignSystemSidebarComponent],
  templateUrl: './design-system-header.component.html',
  styleUrl: './design-system-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DesignSystemHeaderComponent {
  public readonly themeService = inject(ThemeService);
  public isMenuOpen = signal<boolean>(false);

  toggleMenu() {
    this.isMenuOpen.set(!this.isMenuOpen());
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }
}
