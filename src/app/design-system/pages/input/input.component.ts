import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { DsTextInputComponent } from '@design-system/components/ds-input/ds-text-input/ds-text-input.component';
import { DsNumberInputComponent } from '@design-system/components/ds-input/ds-number-input/ds-number-input.component';
import { DsEmailInputComponent } from '@design-system/components/ds-input/ds-email-input/ds-email-input.component';
import { DsPasswordInputComponent } from '@design-system/components/ds-input/ds-password-input/ds-password-input.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'page-input',
  imports: [
    RouterLink,
    ReactiveFormsModule,
    DsTextInputComponent,
    DsNumberInputComponent,
    DsEmailInputComponent,
    DsPasswordInputComponent,
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export default class InputComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      textInput: [''],
      numberInput: [null],
      emailInput: [''],
      passwordInput: [''],
    });
  }
}
