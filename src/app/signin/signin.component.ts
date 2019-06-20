import { Component, OnInit } from '@angular/core';
import { TopBarService } from '../top-bar/top-bar.service';
import { HomeCarouselService } from '../home-carousel/home-carousel.service';



@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
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
      'password': new FormControl(this.user.name, [
        Validators.required,
        Validators.minLength(4),
      ]),

    });
    this.nav.show();
    this.div.show();
  }
  onSubmit() {
    console.log(this.user)
  }
}
