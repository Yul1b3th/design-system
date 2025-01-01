import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { DsDatePickerComponent } from '@design-system/components/ds-date-picker/ds-date-picker.component';

@Component({
  selector: 'page-date-picker',
  imports: [ReactiveFormsModule, DsDatePickerComponent],
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DatePickerComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  form!: FormGroup;

  ngOnInit(): void {
    this.form = this.fb.group({
      datePicker: [''],
    });
  }
}
