import { Component, OnInit } from '@angular/core';
import { TopBarService } from '../top-bar/top-bar.service';
import { HomeCarouselService } from '../home-carousel/home-carousel.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public nav: TopBarService, public div:HomeCarouselService ) { }

  ngOnInit() {
    this.nav.hide();
    this.div.hide();
  }

}
