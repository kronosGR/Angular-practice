import {
  AbstractControl,
  AsyncValidator,
  FormControl,
  ValidationErrors,
} from '@angular/forms';
import { EnzoicService } from '../enzoic.service';
import { catchError, map, Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CompromisedPassword implements AsyncValidator {
  constructor(private enzoic: EnzoicService) {}

  validate(
    control: AbstractControl
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null>;
  validate(control: AbstractControl): ValidationErrors | null;
  validate(
    control: AbstractControl
  ):
    | Promise<ValidationErrors | null>
    | Observable<ValidationErrors | null>
    | ValidationErrors
    | null {
    return this.enzoic.checkPassword(control.value).pipe(
      map(() => {
        return { compromised: true };
      }),
      catchError((err) => {
        console.log(err);
        return of(null);
      })
    );
  }
}
