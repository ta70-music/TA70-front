import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {usersFixtures, musicsFixtures} from '../../Entities/Fixtures';
import {User} from '../../Entities/User';
import Music from '../../Entities/Music';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @Input() user: User;
  private music: Music[];

  constructor() {
  }

  ngOnInit() {
    this.music = musicsFixtures.filter(mu => mu.author === this.user);
  }
}
