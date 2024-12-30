import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';
import { ThemeService } from '@design-system/services/theme.service';

@Component({
  selector: 'ds-number-input',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './ds-number-input.component.html',
  styleUrl: './ds-number-input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: DsNumberInputComponent,
      multi: true,
    },
  ],
})
export class DsNumberInputComponent implements ControlValueAccessor {
  public readonly themeService = inject(ThemeService);

  @Input() id: string = '';
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() ariaRequired: boolean = false;
  @Input() disabled: boolean = false;
  @Input() min: number | null = null;
  @Input() max: number | null = null;
  @Input() step: number = 1;

  value: number | null = null;

  private onChange: (value: number | null) => void = () => {};
  private onTouched: () => void = () => {};

  writeValue(value: number | null): void {
    this.value = value;
  }

  registerOnChange(fn: (value: number | null) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  handleInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    const value = input.valueAsNumber;
    this.onChange(isNaN(value) ? null : value);
  }

  handleBlur(): void {
    this.onTouched();
  }
}
