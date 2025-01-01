import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DsDataTableComponent } from '@design-system/components/ds-data-table/ds-data-table.component';

@Component({
  selector: 'data-table',
  imports: [DsDataTableComponent],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DataTableComponent {}
