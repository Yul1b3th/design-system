import { Component } from '@angular/core';

import { DsThemeSwitchComponent } from '@design-system/components/ds-theme-switch/ds-theme-switch.component';

@Component({
  selector: 'theme-switch',
  imports: [DsThemeSwitchComponent],
  templateUrl: './theme-switch.component.html',
  styleUrl: './theme-switch.component.scss',
})
export default class ThemeSwitchComponent {}
