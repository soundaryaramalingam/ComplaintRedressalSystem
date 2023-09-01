import { Component, OnInit } from '@angular/core';
import{FormBuilder,Validators}from '@angular/forms';
import { UserService } from '../user.service';
import { AdminService } from '../admin.service';
import { ManagerService } from '../manager.service';
import { EngineerService } from '../engineer.service';
import { Admin } from '../admin';
import { Engineer } from '../engineer';
import { Manager } from '../manager';
import { User } from '../user';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
admin:Admin;
engineer:Engineer[];
manager:Manager[];
user:User[];
chk:boolean=false;
  constructor(private formbuilder:FormBuilder,private userservice:UserService,private adminservice:AdminService,
    private managerservice:ManagerService,private engineerservice:EngineerService,private router:Router) { }

  ngOnInit(): void {
    this.adminservice.getadmin(1).subscribe(data=>{
       this.admin=data;

       this.userservice.getallusers().subscribe(data=>{
        this.user=data;
                
    this.managerservice.getallmanagers().subscribe(data=>{
      this.manager=data;
      
      this.engineerservice.getallengineers().subscribe(data=>{
        this.engineer=data;
        
        console.log(this.user);
        console.log(this.manager);
        console.log(this.engineer);
        });
      });
           });
      
    });
  
  }

  loginform=this.formbuilder.group({
    username:this.formbuilder.control('',Validators.required),
    password:this.formbuilder.control('',Validators.required)
  });

  buttonaction()
  {
  
    if(this.loginform.controls.username.value==this.admin.username && this.loginform.controls.password.value==this.admin.userpassword)
    {
     this.chk=true;
    
      this.router.navigate(['adminpage']);

    }
    else if(this.chk==false){
      for(let i of this.user)
      {
        if((this.loginform.controls.username.value==i.email ||this.loginform.controls.username.value==i.phoneno) && this.loginform.controls.password.value==i.password)
        {
          sessionStorage.setItem('userdetail',i.id.toString());
          this.chk=true;
         break;
          
        }
      }
      if(this.chk==true)
      {
        this.router.navigate(['user/registercomplaint']);
      }
      else if(this.chk==false)
      {
        for(let i of this.manager)
      {
        if((this.loginform.controls.username.value==i.email ||this.loginform.controls.username.value==i.phoneno) && this.loginform.controls.password.value==i.password)
        {
          sessionStorage.setItem('managerdetail',i.id.toString());
          this.chk=true;
        
          
        }
      }
      if(this.chk==true)
      {
        this.router.navigate(['manager/raisedcomplaintsmanager']);
      }
      else if(this.chk==false)
      {
        for(let i of this.engineer)
        {
          if((this.loginform.controls.username.value==i.email ||this.loginform.controls.username.value==i.phoneno) && this.loginform.controls.password.value==i.password)
          {
            sessionStorage.setItem('engineerdetail',i.id.toString());
            this.chk=true;
            
           
          }
        }
        if(this.chk==true)
        {
          this.router.navigate(['engineer/raisedcomplaintsengineer']);
        }
        else{
          alert("wrong username or password");
        }
       
      }
      }
     
    }
  }

}
