import {Component, OnDestroy, OnInit} from '@angular/core';
import HomeTopic from "../../Entities/HomeTopic";
const INTERVAL = 5;
@Component({
  selector: 'app-home-carousel',
  templateUrl: './home-carousel.component.html',
  styleUrls: ['./home-carousel.component.css']
})
export class HomeCarouselComponent implements OnInit, OnDestroy {

  slides: HomeTopic[];
  indexActual: number;
  focusTopic: HomeTopic;
  step: number;
  intervalId: number;
  alreadyMove: boolean;

  constructor() {
    this.indexActual = 0;
    this.alreadyMove=false;
    this.slides = [
      new HomeTopic().setmaintitle('You bring the passion. <br> We bring the music.')
        .setbutton('signin')
        .setsubtitle('Join wavein today.')
        .setbuttonlink('/signin'),
      new HomeTopic().setmaintitle('Discover authors and musics')
        .setbutton('discover')
        .setsubtitle('')
        .setbuttonlink('/main'),
    ];
  }

  ngOnInit() {
    this.focusTopic = this.slides[this.indexActual];
    this.intervalId = window.setInterval(()=>{
      if(!this.alreadyMove){
        this.nextSlide();
      } else {
        this.alreadyMove=false;
      }
    },INTERVAL*1000)
  }

  ngOnDestroy(): void {
    window.clearInterval(this.intervalId);
  }


  previousSlide() {
    this.indexActual--;
    this.alreadyMove=true;
    if (this.indexActual < 0) {
      this.indexActual = this.slides.length - 1;
    }
    this.updateFocus()
  }

  nextSlide() {
    this.indexActual++;
    this.alreadyMove=true;
    if (this.indexActual >= this.slides.length) {
      this.indexActual = 0;
    }
    this.updateFocus()
  }

  updateFocus() {
    this.focusTopic = this.slides[this.indexActual];
    this.step = (100/this.slides.length)*this.indexActual;
  }
}
