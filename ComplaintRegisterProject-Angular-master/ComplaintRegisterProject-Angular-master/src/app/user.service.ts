import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpclient:HttpClient) { }
 
  private uriapi='http://localhost:8080/user';

 public saveuser(user:User):Observable<object>
  {
    return this.httpclient.post(`${this.uriapi}`,user);
  }

  public getsingleuser(id:number):Observable<User>
  {
    return this.httpclient.get<User>(`${this.uriapi}/${id}`);
  }
  public updateuser(id:number,user:User):Observable<object>
  {
    return this.httpclient.put(`${this.uriapi}/${id}`,user);
  }

  public deleteuser(id:number):Observable<object>
  {
    return this.httpclient.delete(`${this.uriapi}/${id}`);
  }

  public getallusers():Observable<User[]>
  {
    return this.httpclient.get<User[]>(`${this.uriapi}`);
  }
}
