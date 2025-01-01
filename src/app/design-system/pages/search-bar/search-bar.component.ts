import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DsSearchBarComponent } from '@design-system/components/ds-search-bar/ds-search-bar.component';

@Component({
  selector: 'search-bar',
  imports: [ReactiveFormsModule, DsSearchBarComponent],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SearchBarComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  form!: FormGroup;

  ngOnInit(): void {
    this.form = this.fb.group({
      searchValue: [''],
    });

    // Suscribirse a los cambios en el valor del formulario
    this.form.get('searchValue')?.valueChanges.subscribe((value) => {
      console.log('Valor seleccionado en el padre:', value);
    });
  }
}
