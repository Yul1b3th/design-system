import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { DesignSystemSidebarComponent } from './shared/design-system-sidebar/design-system-sidebar.component';
import { DesignSystemFooterComponent } from './shared/design-system-footer/design-system-footer.component';
import { DesignSystemHeaderComponent } from './shared/design-system-header/design-system-header.component';
import { DsScrollTopButtonComponent } from './components/ds-scroll-top-button/ds-scroll-top-button.component';

@Component({
  selector: 'design-system',
  templateUrl: './design-system.component.html',
  styleUrls: ['./design-system.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterOutlet,
    DesignSystemSidebarComponent,
    DesignSystemFooterComponent,
    DesignSystemHeaderComponent,
    DsScrollTopButtonComponent,
  ],
})
export default class DesignSystemComponent {}
