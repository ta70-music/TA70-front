import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import UserFormSignin from "../../Entities/UserFormSignin";
import {usersFixtures} from "../../Entities/Fixtures";
import {User} from "../../Entities/User";
import userSession from "../../tools/userSession";
import {Router} from "@angular/router";


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  public user: UserFormSignin;
  public form: FormGroup;

  constructor(private route: Router) {
  }

  ngOnInit() {
    this.user = new UserFormSignin();
    this.form = new FormGroup({
      'name': new FormControl(this.user.name, [
        Validators.required,
        Validators.minLength(3),
      ]),
      'password': new FormControl(this.user.name, [
        Validators.required,
        Validators.minLength(4),
      ]),

    });
  }

  onSubmit() {
    let usersfind = usersFixtures.filter((usr: User) => {
      return usr.name === this.user.name;
    })
    if (usersfind.length === 1) {
      const userfind = usersfind[0];
      if (userfind.password === this.user.password) {
        userSession.get().setUser(userfind);
        this.route.navigate(['/'])
      }
    }
  }
}
