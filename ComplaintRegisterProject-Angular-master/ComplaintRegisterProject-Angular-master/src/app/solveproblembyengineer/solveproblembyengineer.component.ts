import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComplaintService } from '../complaint.service';
import { Complaint } from '../complaint';

@Component({
  selector: 'app-solveproblembyengineer',
  templateUrl: './solveproblembyengineer.component.html',
  styleUrls: ['./solveproblembyengineer.component.css']
})
export class SolveproblembyengineerComponent implements OnInit {
id:number;
selectedcomplaint:Complaint;
  constructor(private aroute:ActivatedRoute,private compllaintservice:ComplaintService) { }

  ngOnInit(): void {
this.id=this.aroute.snapshot.params['id'];
this.compllaintservice.getsinglecomplaint(this.id).subscribe(data=>{
  this.selectedcomplaint=data;
});
  }
  action1()
  {
    this.selectedcomplaint.status="WIP";
    this.selectedcomplaint.statusvalue=false;
    this.compllaintservice.updatecomplaint(this.id,this.selectedcomplaint).subscribe(data=>{
    alert("Updated the status to Work In Progress");
    });
  }
  action2()
  {
    this.selectedcomplaint.status="Resolved";
    this.selectedcomplaint.statusvalue=true;
    this.compllaintservice.updatecomplaint(this.id,this.selectedcomplaint).subscribe(data=>{
    alert("Updated the status to Resolved");
    });
  }
  action3()
  {
    this.selectedcomplaint.status="Esclated";
    this.selectedcomplaint.statusvalue=false;
    this.compllaintservice.updatecomplaint(this.id,this.selectedcomplaint).subscribe(data=>{
    alert("Updated the status to Esclated");
    });
  }

}
