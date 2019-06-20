import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { HomeCarouselService } from './home-carousel.service';




@Component({
  selector: 'app-home-carousel',
  templateUrl: './home-carousel.component.html',
  providers: [NgbCarouselConfig],  // add NgbCarouselConfig to the component providers

  styleUrls: ['./home-carousel.component.css']
})
export class HomeCarouselComponent implements OnInit {
  //images = [1].map(() => `https://picsum.photos/1450/600?random&t=${Math.random()}`);
  //images = [1].map(() => `https://picsum.photos/id/1082/1450/600`);
  //images = [1, 2, 3].map(() => `https://picsum.photos/id/1082/5416/3611/1000/500`);


  constructor(config: NgbCarouselConfig, public div: HomeCarouselService ) {
    // customize default values of carousels used by this component tree
    config.interval = 5000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit() {
  }

}
