import { Component, OnInit } from '@angular/core';
import Music from "../../Entities/Music";
import {musicsFixtures} from "../../Entities/Fixtures";

@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.css']
})
export class MusicListComponent implements OnInit {
  musics: Music[];
  constructor() {
    this.musics = musicsFixtures;
  }

  ngOnInit() {
  }

}
