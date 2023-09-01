import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { FormBuilder,Validators } from '@angular/forms';

import { Engineer } from '../engineer';
import { EngineerService } from '../engineer.service';
@Component({
  selector: 'app-updateengineer',
  templateUrl: './updateengineer.component.html',
  styleUrls: ['./updateengineer.component.css']
})
export class UpdateengineerComponent implements OnInit {

  engineer:Engineer;
  id:number;
    constructor(private engineerservice:EngineerService,private arouter:ActivatedRoute,private formbuilder:FormBuilder) { }
  
    ngOnInit(): void {
  this.id=this.arouter.snapshot.params['id'];
  this.engineerservice.getsingleaengineer(this.id).subscribe(data=>{
   this.engineer=data;
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
      this.engineer.address=this.updateuserform.controls.address.value;
      this.engineer.phoneno=this.updateuserform.controls.phoneno.value;
      this.engineer.pincode=this.updateuserform.controls.pincode.value;
      this.engineer.email=this.updateuserform.controls.email.value;
      this.engineer.username=this.updateuserform.controls.username.value;
      this.engineerservice.updateengineer(this.id,this.engineer).subscribe(data=>{
        alert("updated Successfully")
      });}

}
