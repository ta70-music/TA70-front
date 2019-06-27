import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {usersFixtures} from '../../Entities/Fixtures';
import {User} from '../../Entities/User';

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

  constructor(private route: ActivatedRoute) {
    this.mode = Mode.ENGINE;
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.user = usersFixtures[id];
  }

  onChangeMode(m: Mode) {
    this.mode = m;
  }
}
