import { Component, OnInit } from '@angular/core';
import {User} from "../../Entities/User";
import {usersFixtures} from "../../Entities/Fixtures";

@Component({
  selector: 'app-user-suggestion',
  templateUrl: './user-suggestion.component.html',
  styleUrls: ['./user-suggestion.component.css']
})
export class UserSuggestionComponent implements OnInit {
  users: User[];
  constructor() {
    this.users = usersFixtures;
  }

  ngOnInit() {
  }

}
