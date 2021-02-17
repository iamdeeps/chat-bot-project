import { Injectable } from '@angular/core';
import { NetworkService } from '../network-service/network.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private networkService:NetworkService) { }

  userLogin(userData){
    return this.networkService.checkUserLogin(userData)
  }

  userRegister(userData){
    return this.networkService.registerNewUserData(userData)
  }

  fetchUser(){
    return this.networkService.fetchUserData()
  }
}
