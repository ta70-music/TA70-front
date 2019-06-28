import {Component, HostListener, OnInit} from '@angular/core';
import MusicManager from "../../tools/MusicManager";
import Music from "../../Entities/Music";

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  manager: MusicManager;
  actualMusic: Music;

  constructor() {
    this.manager = MusicManager.get()
    this.manager.addPlayCallback(() => {
      this.play()
    })
    this.manager.addStopCallback(() => {
      this.stop()
    })
    this.actualMusic = this.manager.musicRun;
  }

  ngOnInit() {
  }

  @HostListener('document:keyup.space')
  onSpace() {
    if(this.manager.isPlay){
      this.manager.stop()
    } else {
      this.manager.play()
    }
  }

  onPlay() {
    this.manager.play()
  }

  onPause() {
    this.manager.stop()
  }

  play() {
    let audio = document.querySelector('#audiobar') as HTMLMediaElement;
    if (this.actualMusic !== this.manager.musicRun) {
      this.actualMusic = this.manager.musicRun;
      audio.load();
    }
    audio.play();
  }

  stop() {
    let audio = document.querySelector('#audiobar') as HTMLMediaElement;
    audio.pause();
  }
}
