import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../feedback.service';
import { FormBuilder ,Validators} from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../user';
import { Feedback } from '../feedback';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
user:User;
id:number;
  constructor(private feedbackservice:FeedbackService,private formbuilder:FormBuilder,private userservice:UserService) { }

  ngOnInit(): void {
    this.id=parseInt(sessionStorage.getItem("userdetail"));
    this.userservice.getsingleuser(this.id).subscribe(data=>{
   this.user=data;
    });
  }
  feedbackform=this.formbuilder.group({
  problem:this.formbuilder.control('',Validators.required),
  review:this.formbuilder.control('',Validators.required)
  });

  action()
  {
    this.feedbackservice.savefeedback(new Feedback(this.user,this.feedbackform.controls.problem.value,this.feedbackform.controls.review.value)).subscribe(data=>{
    alert("done");
    });
  }
}
