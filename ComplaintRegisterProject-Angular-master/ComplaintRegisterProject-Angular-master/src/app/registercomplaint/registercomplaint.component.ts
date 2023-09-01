import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { ComplaintService } from '../complaint.service';
import { ManagerService } from '../manager.service';
import { Manager } from '../manager';
import { Complaint } from '../complaint';
import { User } from '../user';
import { UserService } from '../user.service';
@Component({
  selector: 'app-registercomplaint',
  templateUrl: './registercomplaint.component.html',
  styleUrls: ['./registercomplaint.component.css']
})
export class RegistercomplaintComponent implements OnInit {
manager:Manager[];
id:number;
user:User;
  constructor(private formbuilder:FormBuilder,private complaintservice:ComplaintService,
    private managerservice:ManagerService,private userservice:UserService) { }

  ngOnInit(): void {
    this.id=parseInt(sessionStorage.getItem("userdetail"));
    this.userservice.getsingleuser(this.id).subscribe(data=>{
    this.user=data;
    this.managerservice.getallmanagers().subscribe(data=>{
      this.manager=data;
      });
    });
   
  }

  complaintform=this.formbuilder.group({
   username:this.formbuilder.control('',Validators.required),
   address:this.formbuilder.control('',Validators.required),
   phoneno:this.formbuilder.control('',Validators.required),
   pincode:this.formbuilder.control('',Validators.required),
   problem:this.formbuilder.control('',Validators.required)

  });
  action()
  {
    let chk:boolean=false;
    let manager:Manager;
     for(let i of this.manager)
     {
      if(i.pincode==this.complaintform.controls.pincode.value)
      {
        manager=i;
        break;
      }
     }

     this.complaintservice.savecomplaint(new Complaint(manager,this.user,this.complaintform.controls.username.value,this.complaintform.controls.address.value,this.complaintform.controls.phoneno.value,
      this.complaintform.controls.pincode.value,this.complaintform.controls.problem.value,"RAISED",false,new Date())).subscribe(data=>{
      alert("problem raised successfully");
     });
  }

}
