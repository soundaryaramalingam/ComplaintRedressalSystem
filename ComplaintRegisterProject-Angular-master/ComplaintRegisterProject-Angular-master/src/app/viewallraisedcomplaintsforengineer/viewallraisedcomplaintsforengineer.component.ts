import { Component, OnInit } from '@angular/core';
import { EngineerService } from '../engineer.service';
import { Engineer } from '../engineer';
import { ComplaintService } from '../complaint.service';
import { Complaint } from '../complaint';
import { Router } from '@angular/router';


@Component({
  selector: 'app-viewallraisedcomplaintsforengineer',
  templateUrl: './viewallraisedcomplaintsforengineer.component.html',
  styleUrls: ['./viewallraisedcomplaintsforengineer.component.css']
})
export class ViewallraisedcomplaintsforengineerComponent implements OnInit {
id:number;
compalaint:Complaint[]=[];
  constructor(private engineerservice:EngineerService,private complaintservice:ComplaintService,private router:Router) { }

  ngOnInit(): void {
this.id=parseInt(sessionStorage.getItem("engineerdetail"));
      this.complaintservice.getallcomplaints().subscribe(data=>{
      for(let i of data)
      {
         if(i.engineer.id==this.id && (i.status=="RAISED" || i.status=="WIP"))
         {
          this.compalaint.push(i);
         }
      }
      });
  }
  action(id:number)
  {
    this.router.navigate(['engineer/solveproblem',id]);
      
  }

}
