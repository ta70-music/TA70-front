import { Component, OnInit } from '@angular/core';
import { TopBarService } from '../top-bar/top-bar.service';
import { HomeCarouselService } from '../home-carousel/home-carousel.service';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import UserForm from "../../Entities/UserFormSignup";
import {passwordConfirmValidator} from "../../PasswordConfirmValidator";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public user: UserForm;
  public form: FormGroup;
  constructor(public nav: TopBarService, public div:HomeCarouselService ) {
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
    this.nav.show();
    this.div.show();
  }

  onSubmit() {
    console.log(this.user)
  }
}
