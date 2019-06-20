import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import UserForm from "../../Entities/UserForm";
import {passwordConfirmValidator} from "../../PasswordConfirmValidator";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public user: UserForm;
  public form: FormGroup;
  constructor() {
  }

  ngOnInit() {
    this.user = new UserForm();
    this.form = new FormGroup({
      'name': new FormControl(this.user.name, [
        Validators.required,
        Validators.minLength(4),
      ]),
      'email': new FormControl(this.user.name, [
        Validators.required,
        Validators.minLength(4),
      ]),
      'password': new FormControl(this.user.name, [
        Validators.required,
        Validators.minLength(4),
      ]),
      'passwordConfirm': new FormControl(this.user.name, [
        Validators.required,
        Validators.minLength(4),
        passwordConfirmValidator(this.user)
      ]),
    });
  }

  onSubmit() {
    console.log(this.user)
  }
}
