import { Component, computed, inject } from '@angular/core';
import { ThemeService } from '@design-system/services/theme.service';

@Component({
  selector: 'ds-theme-switch',
  imports: [],
  templateUrl: './ds-theme-switch.component.html',
  styleUrl: './ds-theme-switch.component.scss',
})
export class DsThemeSwitchComponent {
  private readonly themeService = inject(ThemeService);
  isDarkMode = computed(() => this.themeService.theme() === 'dark-mode');

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
