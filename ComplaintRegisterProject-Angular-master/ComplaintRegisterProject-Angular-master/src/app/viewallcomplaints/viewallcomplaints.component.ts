import { Component, OnInit } from '@angular/core';
import { ComplaintService } from '../complaint.service';
import { Complaint } from '../complaint';

@Component({
  selector: 'app-viewallcomplaints',
  templateUrl: './viewallcomplaints.component.html',
  styleUrls: ['./viewallcomplaints.component.css']
})
export class ViewallcomplaintsComponent implements OnInit {
complaint:Complaint[];
  constructor(private complaintservice:ComplaintService) { }

  ngOnInit(): void {
    this.complaintservice.getallcomplaints().subscribe(data=>{
    this.complaint=data;
    });
  }

}
