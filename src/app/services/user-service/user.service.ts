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

  async userRegister(userData){
    return await this.networkService.registerNewUserData(userData)
  }

  fetchUser(){
    return this.networkService.fetchUserData()
  }
}
