import {Component, Input, OnInit} from '@angular/core';
import Music from "../../Entities/Music";
import {musicsFixtures} from "../../Entities/Fixtures";
import MusicManager from "../../tools/MusicManager";

@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.css']
})
export class MusicListComponent implements OnInit {
  @Input() musics: Music[];
  manager: MusicManager;
  constructor() {
    this.manager = MusicManager.get();
  }

  ngOnInit() {
  }

  onPlay(m: Music) {
    this.manager.setMusic(m);
    this.manager.play();

  }

  onPause(m: Music) {
    this.manager.stop();
  }

  onPlayPause(m: Music) {
    if(this.manager.isPlay){
      if(this.manager.musicRun===m){
        this.onPause(m);
      }else {
        this.onPlay(m);
      }
    } else {
      this.onPlay(m);
    }
  }
}
