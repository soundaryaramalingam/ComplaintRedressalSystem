import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Feedback } from './feedback';
@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private httpclient:HttpClient) { }

  private uriapi='http://localhost:8080/feedback';
  public savefeedback(feedback:Feedback):Observable<object>
  {
    return this.httpclient.post(`${this.uriapi}`,feedback);
  }

  public getallfeedback():Observable<Feedback[]>
  {
    return this.httpclient.get<Feedback[]>(`${this.uriapi}`);
  }
}
