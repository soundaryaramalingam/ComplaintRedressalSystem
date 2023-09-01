import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{Observable} from 'rxjs';
import { Engineer } from './engineer';
@Injectable({
  providedIn: 'root'
})
export class EngineerService {

  constructor(private httpclient:HttpClient) { }
 
  private uriapi='http://localhost:8080/engineer';

 public saveengineerr(engineer:Engineer):Observable<object>
  {
    return this.httpclient.post(`${this.uriapi}`,engineer);
  }

  public getsingleaengineer(id:number):Observable<Engineer>
  {
    return this.httpclient.get<Engineer>(`${this.uriapi}/${id}`);
  }

  public getallengineers():Observable<Engineer[]>
  {
    return this.httpclient.get<Engineer[]>(`${this.uriapi}`);
  }

  public updateengineer(id:number,engineer:Engineer):Observable<object>
  {
    return this.httpclient.put(`${this.uriapi}/${id}`,engineer);
  }

  public deletengineer(id:number):Observable<object>
  {
    return this.httpclient.delete(`${this.uriapi}/${id}`);
  }
}
