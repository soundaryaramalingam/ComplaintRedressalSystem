import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { FormBuilder,Validators } from '@angular/forms';
import { Manager } from '../manager';
import { ManagerService } from '../manager.service';

@Component({
  selector: 'app-updatemanager',
  templateUrl: './updatemanager.component.html',
  styleUrls: ['./updatemanager.component.css']
})
export class UpdatemanagerComponent implements OnInit {
manager:Manager;
id:number;
  constructor(private managerservice:ManagerService,private arouter:ActivatedRoute,private formbuilder:FormBuilder) { }

  ngOnInit(): void {
this.id=this.arouter.snapshot.params['id'];
this.managerservice.getsingleamanager(this.id).subscribe(data=>{
 this.manager=data;
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
    this.manager.address=this.updateuserform.controls.address.value;
    this.manager.phoneno=this.updateuserform.controls.phoneno.value;
    this.manager.pincode=this.updateuserform.controls.pincode.value;
    this.manager.email=this.updateuserform.controls.email.value;
    this.manager.username=this.updateuserform.controls.username.value;
    this.managerservice.updatemanager(this.id,this.manager).subscribe(data=>{
      alert("updated Successfully")
    });
  }
}
