import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Systemcomplaint } from './systemcomplaint';
@Injectable({
  providedIn: 'root'
})
export class SystemcomplaintService {

  constructor(private httpclient:HttpClient) { }
  
private uriapi='http://localhost:8080/issues';

  public save(systemcomplaint:Systemcomplaint):Observable<object>
  {
    return this.httpclient.post(`${this.uriapi}`,systemcomplaint);
  }
  public getall():Observable<Systemcomplaint[]>
  {
    return this.httpclient.get<Systemcomplaint[]>(`${this.uriapi}`);
  }
}
