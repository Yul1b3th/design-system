import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
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
export default class DropdownComponent implements OnInit {
  selectedTheme = signal<string>('auto-mode');
  themeOptions: { label: string; value: string; icon: string }[] = [];

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    const savedTheme = this.themeService.theme();
    this.selectedTheme.set(savedTheme);

    this.themeOptions = [
      {
        label: 'Auto',
        value: 'auto-mode',
        icon: this
          .applyStylesToSvg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 3.75a8.25 8.25 0 1 0 0 16.5V3.75z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 3.75a8.25 8.25 0 0 1 0 16.5V3.75z" fill="currentColor" />
                  </svg>`),
      },
      {
        label: 'Light',
        value: 'light-mode',
        icon: this
          .applyStylesToSvg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                  </svg>`),
      },
      {
        label: 'Dark',
        value: 'dark-mode',
        icon: this
          .applyStylesToSvg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                  </svg>`),
      },
    ];
  }

  onThemeChange(theme: string) {
    this.selectedTheme.set(theme);
    this.themeService.setTheme(theme);
  }

  getLabelWithIcon(showIconsOnly: boolean = false): string {
    const selectedOption = this.themeOptions.find(
      (option) => option.value === this.selectedTheme(),
    );
    if (selectedOption) {
      const iconSvg = selectedOption.icon;
      console.log('Icon SVG:', iconSvg); // Imprimir el SVG del icono
      return showIconsOnly ? iconSvg : `${iconSvg} ${selectedOption.label}`;
    }
    return 'Select Theme';
  }

  applyStylesToSvg(svg: string): string {
    const parser = new DOMParser();
    const doc = parser.parseFromString(svg, 'image/svg+xml');
    const svgElement = doc.querySelector('svg');
    if (svgElement) {
      svgElement.style.width = '40px';
    }
    return new XMLSerializer().serializeToString(doc);
  }
}
