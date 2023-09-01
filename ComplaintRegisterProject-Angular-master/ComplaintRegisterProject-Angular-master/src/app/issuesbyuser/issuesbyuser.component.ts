import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ComplaintService } from '../complaint.service';
import { Complaint } from '../complaint';
import { SystemcomplaintService } from '../systemcomplaint.service';
import { Systemcomplaint } from '../systemcomplaint';
import { UserService } from '../user.service';
import { ManagerService } from '../manager.service';
import { EngineerService } from '../engineer.service';
import { User } from '../user';
import { Engineer } from '../engineer';
import { Manager } from '../manager';

@Component({
  selector: 'app-issuesbyuser',
  templateUrl: './issuesbyuser.component.html',
  styleUrls: ['./issuesbyuser.component.css']
})
export class IssuesbyuserComponent implements OnInit {
id:number;
complaint:Complaint;
user:User;
engineer:Engineer;
manager:Manager;
  constructor(private formbuilder:FormBuilder,private arouter:ActivatedRoute,private complaintservice:ComplaintService,
    private systemcomplaintservice:SystemcomplaintService,private userservice:UserService,
    private maangerservice:ManagerService,private engineerservice:EngineerService) { }

  ngOnInit(): void {
this.id=this.arouter.snapshot.params['id'];
console.log(this.id);
this.complaintservice.getsinglecomplaint(this.id).subscribe(data=>{
  this.complaint=data;
});
  }
  issueform=this.formbuilder.group({
   problem:this.formbuilder.control('',Validators.required)
  });

  action()
  {
    console.log(this.complaint.user.id);
    console.log(this.complaint.manager.id);
    
    this.userservice.getsingleuser(this.complaint.user.id).subscribe(data=>{
     this.user=data;
     this.maangerservice.getsingleamanager(this.complaint.manager.id).subscribe(data=>{
      this.manager=data;
      if(this.complaint.engineer!=null){

        this.engineerservice.getsingleaengineer(this.complaint.engineer.id).subscribe(data=>{
          this.engineer=data;
          this.systemcomplaintservice.save(new Systemcomplaint(this.user,this.manager,
            this.engineer,this.issueform.controls.problem.value)).subscribe(data=>{
         alert("done1");
            });
          });
      }
      else{
        this.systemcomplaintservice.save(new Systemcomplaint(this.user,this.manager,
          null,this.issueform.controls.problem.value)).subscribe(data=>{
       alert("done2");
          });
      }
     
      
      });
     });
   
    
  }
}
