import { Component, OnInit } from '@angular/core';
import { TopBarService } from '../top-bar/top-bar.service';
import { HomeCarouselService } from '../home-carousel/home-carousel.service';



@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(public nav: TopBarService, public div:HomeCarouselService ) { }

  ngOnInit() {
    this.nav.show();
    this.div.show();
  }

}
