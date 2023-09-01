import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Complaint } from './complaint';
@Injectable({
  providedIn: 'root'
})
export class ComplaintService {

  constructor(private httpclient:HttpClient) { }
private uriapi='http://localhost:8080/complaint';

  savecomplaint(complaint:Complaint):Observable<object>
  {
    return this.httpclient.post(`${this.uriapi}`,complaint);
  }

  getsinglecomplaint(id:number):Observable<Complaint>
  {
    return this.httpclient.get<Complaint>(`${this.uriapi}/${id}`);
}

getallcomplaints():Observable<Complaint[]>
{
  return this.httpclient.get<Complaint[]>(`${this.uriapi}`);
}

updatecomplaint(id:number,complaint:Complaint):Observable<object>
{
  return this.httpclient.put(`${this.uriapi}/${id}`,complaint);
}
deletecomplaint(id:number):Observable<object>
{
  return this.httpclient.delete(`${this.uriapi}/${id}`);
}
}
