import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user-service/user.service';

@Component({
  selector: 'chat-view',
  templateUrl: './chat-view.component.html',
  styleUrls: ['./chat-view.component.css']
})
export class ChatViewComponent implements OnInit {
  registeredUsers:any
  constructor(
    private userService:UserService) { 
      this.fetchUsers()
    }

  ngOnInit() {
  }

  async fetchUsers(){
    this.registeredUsers = await this.userService.fetchUser()
  }

  submitMessage(){
    console.log('message submitted')
  }



}
