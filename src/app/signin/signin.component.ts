import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import UserFormSignin from "../../Entities/UserFormSignin";


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  public user: UserFormSignin;
  public form: FormGroup;

  constructor() {
  }

  ngOnInit() {
    this.user = new UserFormSignin();
    this.form = new FormGroup({
      'name': new FormControl(this.user.name, [
        Validators.required,
        Validators.minLength(4),
      ]),
      'password': new FormControl(this.user.name, [
        Validators.required,
        Validators.minLength(4),
      ]),

    });
  }
  onSubmit() {
    console.log(this.user)
  }
}
