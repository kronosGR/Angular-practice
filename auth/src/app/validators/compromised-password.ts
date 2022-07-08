import { AsyncValidator } from '@angular/forms';

export class CompromisedPassword implements AsyncValidator {
  validate(
    control: AbstractControl
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {}
}
