import {Component, OnInit} from '@angular/core';
import {musicsFixtures} from "../../Entities/Fixtures";
import Music from "../../Entities/Music";
import Category from "../../Entities/Category";
import {MainMode} from "../enum/main-mode.enum";
import {User} from "../../Entities/User";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  musics: Music[];
  mode: MainMode;
  MainMode = MainMode;
  userfocus: User;

  constructor() {
    this.musics = musicsFixtures;
    this.mode = MainMode.MUSIC;
    this.userfocus = null;
  }

  ngOnInit() {
  }

  onModeChange(m: MainMode) {
    this.userfocus=null;
    this.mode = m;
  }

  onCategoryChange(c: Category) {
    this.onModeChange(MainMode.MUSIC)
    if (c === null) {
      this.musics = musicsFixtures
    } else {
      this.musics = musicsFixtures.filter(((m: Music) => {
        return m.category === c;
      }))
    }
  }

  onUserChange(u: User) {
    this.userfocus = u;
  }
}
