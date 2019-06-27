import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {usersFixtures, musicsFixtures} from '../../Entities/Fixtures';
import {User} from '../../Entities/User';
import Music from '../../Entities/Music';

enum Mode {
  CONVEYER,
  MATERIAL,
  ENGINE
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private user: User;
  public mode: Mode;
  private music: Music[];

  constructor(private route: ActivatedRoute) {
    this.mode = Mode.ENGINE;
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.user = usersFixtures[id];
    this.music = musicsFixtures.filter(mu => mu.author = this.user);
  }

  onChangeMode(m: Mode) {
    this.mode = m;
  }
}
