import { Component, OnInit } from '@angular/core';
import{FormBuilder,Validators} from '@angular/forms';
import { UserService } from '../user.service';
import { ManagerService } from '../manager.service';
import { EngineerService } from '../engineer.service';
import { Engineer } from '../engineer';
import { User } from '../user';
import { Manager } from '../manager';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
chk:boolean=false;
  constructor(private formbuilder:FormBuilder,private userservice:UserService,private managerservice:ManagerService,
    private engineerservice:EngineerService) { }

  ngOnInit(): void {
  }
 registerform=this.formbuilder.group({
  username:this.formbuilder.control('',Validators.required),
  email:this.formbuilder.control('',Validators.required),
select:this.formbuilder.control('',Validators.required),
password:this.formbuilder.control('',Validators.required),
phoneno:this.formbuilder.control('',Validators.required),
address:this.formbuilder.control('',Validators.required),
pincode:this.formbuilder.control('',Validators.required),
 });
  action()
  {
    if(this.registerform.controls.select.value=="engineer")
    {
      this.engineerservice.saveengineerr(new Engineer(this.registerform.controls.username.value,
        this.registerform.controls.email.value,this.registerform.controls.password.value,this.registerform.controls.phoneno.value,
        this.registerform.controls.address.value,this.registerform.controls.pincode.value)).subscribe(data=>{
      alert("registered engineer successfully");
      });
    }
    else if(this.registerform.controls.select.value=="user")
    {
      this.userservice.saveuser(new User(this.registerform.controls.username.value,
        this.registerform.controls.email.value,this.registerform.controls.password.value,this.registerform.controls.phoneno.value,
        this.registerform.controls.address.value,this.registerform.controls.pincode.value)).subscribe(data=>{
      alert("registered user successfully");
      });
    }
    else if(this.registerform.controls.select.value=="manager")
    
    {
       this.managerservice.savemanager(new Manager(this.registerform.controls.username.value,
        this.registerform.controls.email.value,this.registerform.controls.password.value,this.registerform.controls.phoneno.value,
        this.registerform.controls.address.value,this.registerform.controls.pincode.value)).subscribe(data=>{
          alert("registered manager successfully");
       });
    }
 else{
  alert("select the catagory first");
 }
  }
}
