import {AbstractControl, FormGroup, ValidatorFn} from "@angular/forms";
import UserFormSignup from "./Entities/UserFormSignup";

export function passwordConfirmValidator(user: UserFormSignup): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    console.log(user)
    console.log(control)
    console.log(user.password===control.value)
    const passwordConfirm = user.password!==control.value;
    return passwordConfirm ? {'passwordConfirm': {value: control.value}} : null;
  };
}
