import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiURL = 'https://ang-node-todo.herokuapp.com';
  // 'http://localhost:3000';
  

  constructor(private httpclinet: HttpClient) { }
  public getUsers(): any{
    return this.httpclinet.get( this.apiURL + '/users');
  }
  public getUserDetails(id:any): any{
    return this.httpclinet.get( this.apiURL + '/users/'+id);
  }
  public addUser(data:{}): any{
    console.log("posting request")
    return this.httpclinet.post( this.apiURL + '/users/register',(data))
  }
  public deleteUser(id:any): any{
    return this.httpclinet.delete( this.apiURL + '/users/'+id)
  }
  public updateUser(id:any,data:any): any{
    return this.httpclinet.patch( this.apiURL + '/users/'+id,data)
  }
  public searchUsers(user:any): any{
    console.log(user);
    
    return this.httpclinet.post( this.apiURL + '/users/search',user);
  }
  
}
