import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  inject,
} from '@angular/core';
import { ThemeService } from '@design-system/services/theme.service';
import { DsButtonComponent } from '@design-system/components/ds-button/ds-button.component';

@Component({
  selector: 'ds-card',
  imports: [CommonModule, DsButtonComponent],
  templateUrl: './ds-card.component.html',
  styleUrls: ['./ds-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DsCardComponent {
  public readonly themeService = inject(ThemeService);

  @Input() imageUrl?: string = '';
  @Input() title?: string = '';
  @Input() titleClass?: string = ''; // Nueva propiedad para clases de título
  @Input() body?: string = '';
  @Input() bodyClass?: string = ''; // Nueva propiedad para clases de cuerpo
  @Input() description?: string = ''; // Nueva propiedad para la descripción
  @Input() descriptionClass?: string = ''; // Nueva propiedad para clases de descripción
  @Input() price?: string = ''; // Nueva propiedad para el precio
  @Input() priceClass?: string = ''; // Nueva propiedad para clases de precio
  @Input() buttonText?: string = '';
  @Input() buttonUrl?: string = '';
  @Input() header?: string = '';
  @Input() footer?: string = '';
}
