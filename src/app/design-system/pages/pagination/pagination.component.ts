import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DsPaginationComponent } from '@design-system/components/ds-pagination/ds-pagination.component';

@Component({
  selector: 'pagination',
  imports: [DsPaginationComponent],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PaginationComponent {
  currentPage = 1;

  onPageChange(newPage: number) {
    this.currentPage = newPage;
  }
}
