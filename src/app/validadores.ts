import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
export class Validadores {
  static checkNumberLength(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;

      if (!value) {
        return null;
      }
      let regex = /^\d{5}$/;

      const length = regex.test(value);

      const PCValid = length;

      return !PCValid ? { PostalCode: true } : null;
    };
  }
  static isNumber(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (!value) {
        return null;
      }
      const isNumeric = /^([0-9])*$/.test(value);

      const validNumber = isNumeric;
      return !validNumber ? { checkedNumber: true } : null;
    };
  }
  static validateNames() {
    return (control: AbstractControl): ValidationErrors | null => {
      const word = control.value;
      if (!word) {
        return null;
      }
      const isCorrect = /^[a-zA-ZÀ]+$/.test(word);
      const validWord = isCorrect;
      return !validWord ? { checkedWord: true } : null;
    };
  }
}
