import { Directive } from '@angular/core';
import { Validator, FormGroup, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appLocationValidator]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: LocationValidatorDirective, multi: true }
  ]
})
export class LocationValidatorDirective implements Validator {
  validate(formGroup: FormGroup): { [key: string]: any } {
    const addressControl = formGroup.controls['address'];
    const cityControl = formGroup.controls['city'];
    const countrysControl = formGroup.controls['country'];
    const onlineUrlControl = (<FormGroup>formGroup.root).controls['onlineUrl'];

    if (
      (addressControl &&
        addressControl.value &&
        cityControl &&
        cityControl.value &&
        countrysControl &&
        countrysControl.value) ||
      (onlineUrlControl && onlineUrlControl.value)
    ) {
      console.log('validated');

      return null;
    } else {
      return { validateLocation: false };
    }
  }
}
