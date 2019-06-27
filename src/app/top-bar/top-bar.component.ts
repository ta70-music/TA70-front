import { Component, OnInit } from '@angular/core';
import UserSession from "../../tools/userSession";
import {User} from "../../Entities/User";


@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  user: User;
  session: UserSession;
  connected: boolean;
  constructor(){
    this.session = UserSession.get();
    this.user = this.session.getUser();
    this.connected = this.session.connected;
  }

  ngOnInit(): void {}

}
