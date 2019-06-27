import {Component, OnInit} from '@angular/core';
import {musicsFixtures} from "../../Entities/Fixtures";
import Music from "../../Entities/Music";
import Category from "../../Entities/Category";

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

  onModeChange() {
    console.log('mode change')
  }

  onCategoryChange(c: Category) {
    if (c===null){
      this.musics = musicsFixtures
    } else {
      this.musics = musicsFixtures.filter(((m: Music) => {
        return m.category===c;
      }))
    }
  }
}
