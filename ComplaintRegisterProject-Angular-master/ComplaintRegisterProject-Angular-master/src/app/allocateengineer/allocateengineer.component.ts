import { Component, OnInit } from '@angular/core';
import { EngineerService } from '../engineer.service';
import { Engineer } from '../engineer';
import { FormBuilder,Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ComplaintService } from '../complaint.service';
import { Complaint } from '../complaint';

@Component({
  selector: 'app-allocateengineer',
  templateUrl: './allocateengineer.component.html',
  styleUrls: ['./allocateengineer.component.css']
})
export class AllocateengineerComponent implements OnInit {
engineers:Engineer[];
id:number;
selectedcomplaint:Complaint;
  constructor(private engineerservice:EngineerService,private formbuilder:FormBuilder,
    private arouter:ActivatedRoute,private complaintservice:ComplaintService) { }

  ngOnInit(): void {
    this.id=this.arouter.snapshot.params['id'];
   
    this.complaintservice.getsinglecomplaint(this.id).subscribe(data=>{
     this.selectedcomplaint=data;
     
     this.engineerservice.getallengineers().subscribe(data=>{
      this.engineers=data;
     });
    });

  }

  allocateform=this.formbuilder.group({
   select:this.formbuilder.control('',Validators.required)
  });

  action()
  {
    var engineer:Engineer;
    this.engineerservice.getsingleaengineer(this.allocateform.controls.select.value).subscribe(data=>{
       engineer=data;

          this.selectedcomplaint.engineer=engineer;
          this.complaintservice.updatecomplaint(this.id,this.selectedcomplaint).subscribe(data=>{
            alert("updated successfully");
          });
       });
    
    
  }
}
