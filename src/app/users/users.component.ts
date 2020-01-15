import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { UsersService} from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: Users[];

  constructor(private usersService: UsersService) { }
  getUsers(): void{
    this.usersService.getUsers().subscribe(users => this.users = users);
  }
  ngOnInit() {
    this.getUsers();
  }

}
