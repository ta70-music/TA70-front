import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import Category from "../../Entities/Category";
import {categoriesFixtures} from "../../Entities/Fixtures";
import {MainMode} from "../enum/main-mode.enum";


@Component({
  selector: 'app-left-bar',
  templateUrl: './left-bar.component.html',
  styleUrls: ['./left-bar.component.css']
})
export class LeftBarComponent implements OnInit {
  categories: Category[];
  actualCat: Category;
  actualmode: MainMode;
  MainMode = MainMode;
  @Output() category = new EventEmitter<Category>();
  @Output() mode = new EventEmitter<MainMode>();

  constructor() {
    this.categories = categoriesFixtures;
    this.actualCat = null;
    this.actualmode = MainMode.MUSIC;
  }

  ngOnInit() {
  }

  onChangeCat(c: Category) {
    if(this.actualmode!==MainMode.MUSIC){
      this.onChangeMode(MainMode.MUSIC)
    }
    this.actualCat = c;
    this.category.emit(c)
  }

  onChangeMode(mode: MainMode) {
    this.actualmode = mode;
    console.log(this.actualmode)
    this.mode.emit(mode);
    this.actualCat = null;
  }
}
