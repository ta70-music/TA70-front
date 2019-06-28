import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from "../../Entities/User";
import {usersFixtures} from "../../Entities/Fixtures";
import Category from "../../Entities/Category";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[];
  @Output() user = new EventEmitter<User>();

  constructor() {
    this.users = usersFixtures;
  }

  ngOnInit() {
  }

  onClick(u: User){
    this.user.emit(u)
  }

}
