import { Component, OnInit } from '@angular/core';
import { Complaint } from '../complaint';
import { ComplaintService } from '../complaint.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-viewallraisedcomplaintsformanager',
  templateUrl: './viewallraisedcomplaintsformanager.component.html',
  styleUrls: ['./viewallraisedcomplaintsformanager.component.css']
})
export class ViewallraisedcomplaintsformanagerComponent implements OnInit {

  selectedcomplaints:Complaint[]=[];
  id:number;
    constructor(private complaintservice:ComplaintService,private router:Router) { }
  
    ngOnInit(): void {
      this.id=parseInt(sessionStorage.getItem('managerdetail'));
      this.complaintservice.getallcomplaints().subscribe(data=>{
      for(let i of data)
      {
        
        if(i.manager.id==this.id && i.status=="RAISED" && i.engineer==null )
        {
          this.selectedcomplaints.push(i);
        }
      }
      console.log(this.selectedcomplaints);
      });
    }
    action(id:number)
    {
      this.router.navigate(['manager/allocateengineer',id]);
    }

}
