import {
  ChangeDetectionStrategy,
  Component,
  Output,
  EventEmitter,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'design-system-sidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './design-system-sidebar.component.html',
  styleUrl: './design-system-sidebar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DesignSystemSidebarComponent {
  @Output() linkClick = new EventEmitter<void>();

  onLinkClick() {
    this.linkClick.emit();
  }
}
