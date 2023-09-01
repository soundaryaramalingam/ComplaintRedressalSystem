import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../feedback.service';
import { Feedback } from '../feedback';

@Component({
  selector: 'app-viewallfeedbacks',
  templateUrl: './viewallfeedbacks.component.html',
  styleUrls: ['./viewallfeedbacks.component.css']
})
export class ViewallfeedbacksComponent implements OnInit {
feedback:Feedback[];
  constructor(private feedbacservice:FeedbackService) { }

  ngOnInit(): void {
    this.feedbacservice.getallfeedback().subscribe(data=>{
   this.feedback=data;
    });
  }

}
