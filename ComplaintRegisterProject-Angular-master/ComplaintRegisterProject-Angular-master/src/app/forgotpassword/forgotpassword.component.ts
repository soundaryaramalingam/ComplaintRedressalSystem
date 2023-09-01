import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ManagerService } from '../manager.service';
import { EngineerService } from '../engineer.service';
import { AdminService } from '../admin.service';
import { User } from '../user';
import { Manager } from '../manager';
import { Engineer } from '../engineer';
import { Admin } from '../admin';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
chk:boolean=false;
chk1:boolean=false;
done:boolean=false;
user:User[];
manager:Manager[];
engineer:Engineer[];
admin:Admin;

userid:number=0;
managerid:number=0;
adminid:number=0;
engineerid:number=0;
  constructor(private userservice:UserService,private managerservice:ManagerService,
    private engineerservice:EngineerService,private adminservice:AdminService,private formbuilder:FormBuilder ) { }

  ngOnInit(): void {
    this.userservice.getallusers().subscribe(data=>{
   this.user=data;
   this.managerservice.getallmanagers().subscribe(data=>{
   this.manager=data;
   this.engineerservice.getallengineers().subscribe(data=>{
    this.engineer=data;
    this.adminservice.getadmin(1).subscribe(data=>{
    this.admin=data;
    });
   });
   });
    });
  }

  emailform=this.formbuilder.group({
   email:this.formbuilder.control('',Validators.required)
  });

  action()
  {
    if(this.emailform.controls.email.value==this.admin.username)
    {
      
       this.done=true;
      
    }

    if(this.done==true)
    {
      this.adminid=1;
      this.chk=true;
      this.chk1=true;
    }
    else if(this.done==false){
      for(let i of this.user)
      {
        if(i.email==this.emailform.controls.email.value)
        {
          this.userid=i.id
          this.done=true;
          break;
        }
      }
      if(this.done==true)
      {
        this.chk=true;
      this.chk1=true;
      }
      else if(this.done==false){
        for(let i of this.manager)
      {
        if(i.email==this.emailform.controls.email.value)
        {
          this.managerid=i.id;
         
          this.done=true;
          break;
        }
      }

      if(this.done==true)
      {
        this.chk=true;
        this.chk1=true;
      }
      else if(this.done==false){
        for(let i of this.engineer)
      {
        if(i.email==this.emailform.controls.email.value)
        {
          this.engineerid=i.id;
        
          this.done=true;
          
          break;
        }
      }
      if(this.done==true)
      {
        this.chk=true;
        this.chk1=true;
      }
      else if(this.done==false){
        alert("enter correct username");
      }
      }
      }
    }

   
      }

    
   
  

  changepasswordform=this.formbuilder.group({
   newpassword:this.formbuilder.control('',Validators.required),
   confirmpassword:this.formbuilder.control('',Validators.required)
  });
  action1()
  {
    if(this.changepasswordform.controls.newpassword.value==this.changepasswordform.controls.confirmpassword.value)
    {
      if(this.adminid==1 && this.userid==0 && this.managerid==0 && this.engineerid==0)
      {
        this.admin.userpassword=this.changepasswordform.controls.newpassword.value;
        this.adminservice.updateadmin(this.admin,this.adminid).subscribe(data=>{
        alert("update successfully");
        });
      }
      else if(this.userid>0 && this.adminid==0 &&  this.managerid==0 && this.engineerid==0)
      {
         let user:User;
        this.userservice.getsingleuser(this.userid).subscribe(data=>{
          user=data;
          user.password=this.changepasswordform.controls.newpassword.value;
          this.userservice.updateuser(this.userid,user).subscribe(data=>{
            alert("update successfully");
          });
        });
      }
      else if(this.userid==0 && this.adminid==0 &&  this.managerid>0 && this.engineerid==0)
      {
         let manager:Manager;
        this.managerservice.getsingleamanager(this.managerid).subscribe(data=>{
          manager=data;
          manager.password=this.changepasswordform.controls.newpassword.value;
          this.managerservice.updatemanager(this.managerid,manager).subscribe(data=>{
            alert("update successfully");
          });
        });
      }
      else if(this.userid==0 && this.adminid==0 &&  this.managerid==0 && this.engineerid>0)
      {
         let engineer:Engineer;
        this.engineerservice.getsingleaengineer(this.engineerid).subscribe(data=>{
          engineer=data;
          engineer.password=this.changepasswordform.controls.newpassword.value;
          this.engineerservice.updateengineer(this.engineerid,engineer).subscribe(data=>{
            alert("update successfully");
          });
        });
      }
      else{
        
      }
    }
    else{
      alert("Chnage Password and Confirm Password Doesn't Match");
    }
  }

}
