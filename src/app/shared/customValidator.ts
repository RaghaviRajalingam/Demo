import { AbstractControl } from '@angular/forms';

export function ValidateUrl(control: AbstractControl) {
  if (!control.value.startsWith('https')) {
    return { invalidUrl: true };
  }
  return null;
}
export function NoNegativeNumbers(control: AbstractControl) {
  return control.value < 0 ? { negativeNumber: true } : null;
}