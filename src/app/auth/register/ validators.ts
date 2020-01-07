import { ValidatorFn, FormGroup, ValidationErrors } from '@angular/forms';

export const confirmPassword: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    const password = control.get('password');
    const confirm = control.get('confirm');
  
    return password && confirm && password.value === confirm.value ? null : { 'passwordNotMatch': true };
  };
