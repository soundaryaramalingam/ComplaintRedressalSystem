import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {

  user:User;
  id:number;
    constructor(private userservice:UserService,private arouter:ActivatedRoute,private formbuilder:FormBuilder) { }
  
    ngOnInit(): void {
  this.id=this.arouter.snapshot.params['id'];
  this.userservice.getsingleuser(this.id).subscribe(data=>{
   this.user=data;
  });
    }
  
    updateuserform=this.formbuilder.group({
     username:this.formbuilder.control('',Validators.required),
     address:this.formbuilder.control('',Validators.required),
     phoneno:this.formbuilder.control('',Validators.required),
     pincode:this.formbuilder.control('',Validators.required),
     email:this.formbuilder.control('',Validators.required),
    });
  
    action()
    {
      this.user.address=this.updateuserform.controls.address.value;
      this.user.phoneno=this.updateuserform.controls.phoneno.value;
      this.user.pincode=this.updateuserform.controls.pincode.value;
      this.user.email=this.updateuserform.controls.email.value;
      this.user.username=this.updateuserform.controls.username.value;
      this.userservice.updateuser(this.id,this.user).subscribe(data=>{
        alert("updated Successfully")
      });
    }

}
