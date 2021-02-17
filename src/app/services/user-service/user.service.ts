import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  userLogin(username:string,password:string){
    console.log('username',username)
    console.log('password',password)
  }
}
