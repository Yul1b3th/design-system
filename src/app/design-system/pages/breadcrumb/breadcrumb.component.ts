import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DsBreadcrumbComponent } from '@design-system/components/ds-breadcrumb/ds-breadcrumb.component';

@Component({
  selector: 'breadcrumb',
  imports: [DsBreadcrumbComponent],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BreadcrumbComponent {}
