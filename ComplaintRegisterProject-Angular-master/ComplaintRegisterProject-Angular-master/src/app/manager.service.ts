import { Injectable } from '@angular/core';
import { Manager } from './manager';
import{Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  constructor(private httpclient:HttpClient) { }
 
  private uriapi='http://localhost:8080/manager';

 public savemanager(manager:Manager):Observable<object>
  {
    return this.httpclient.post(`${this.uriapi}`,manager);
  }

  public getsingleamanager(id:number):Observable<Manager>
  {
    return this.httpclient.get<Manager>(`${this.uriapi}/${id}`);
  }

  public getallmanagers():Observable<Manager[]>
  {
    return this.httpclient.get<Manager[]>(`${this.uriapi}`);
  }
  public updatemanager(id:number,manager:Manager):Observable<object>
  {
    return this.httpclient.put(`${this.uriapi}/${id}`,manager);
  }

  public deletmanager(id:number):Observable<object>
  {
    return this.httpclient.delete(`${this.uriapi}/${id}`);
  }
}
