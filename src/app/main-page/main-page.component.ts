import { Component, OnInit } from '@angular/core';
import {musicsFixtures} from "../../Entities/Fixtures";
import MusicManager from "../../tools/MusicManager";
import Music from "../../Entities/Music";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  musics: Music[];
  constructor() {
    this.musics = musicsFixtures;
  }

  ngOnInit() {
  }

}
