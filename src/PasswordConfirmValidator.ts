import {AbstractControl, FormGroup, ValidatorFn} from "@angular/forms";
import UserForm from "./Entities/UserForm";

export function passwordConfirmValidator(user: UserForm): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    console.log(user)
    console.log(control)
    console.log(user.password===control.value)
    const passwordConfirm = user.password!==control.value;
    return passwordConfirm ? {'passwordConfirm': {value: control.value}} : null;
  };
}
