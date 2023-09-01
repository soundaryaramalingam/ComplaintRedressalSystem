import { Component, OnInit } from '@angular/core';
import { SystemcomplaintService } from '../systemcomplaint.service';
import { Systemcomplaint } from '../systemcomplaint';

@Component({
  selector: 'app-allissues',
  templateUrl: './allissues.component.html',
  styleUrls: ['./allissues.component.css']
})
export class AllissuesComponent implements OnInit {
issues:Systemcomplaint[];
  constructor(private issueservice:SystemcomplaintService) { }

  ngOnInit(): void {
    this.issueservice.getall().subscribe(data=>{
  this.issues=data;
    });
  }

}
