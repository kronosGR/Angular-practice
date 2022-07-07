import { AbstractControl, ValidationErrors, Validator } from '@angular/forms';

export class Match implements Validator {
  registerOnValidatorChange(fn: () => void): void {}

  validate(control: AbstractControl): ValidationErrors | null {
    return null;
  }
}
