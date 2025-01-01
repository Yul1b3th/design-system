import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  inject,
  Input,
  Provider,
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';

import { ThemeService } from '@design-system/services/theme.service';

const SWITCH_VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DsSwitchComponent),
  multi: true,
};

@Component({
  selector: 'ds-switch',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './ds-switch.component.html',
  styleUrls: ['./ds-switch.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [SWITCH_VALUE_ACCESSOR],
})
export class DsSwitchComponent implements ControlValueAccessor {
  public readonly themeService = inject(ThemeService);

  @Input() id: string = '';
  @Input() label: string = '';
  @Input() ariaRequired: boolean = false;
  @Input() disabled: boolean = false;
  @Input() value: boolean = false;
  @Input() errorMessage: string | null = null;

  private onChange: (value: boolean) => void = () => {};
  private onTouched: () => void = () => {};

  writeValue(value: boolean): void {
    this.value = value;
  }

  registerOnChange(fn: (value: boolean) => void): void {
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
    this.onChange(input.checked);
  }

  handleBlur(): void {
    this.onTouched();
  }
}
