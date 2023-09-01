import { Component, OnInit } from '@angular/core';
import { EngineerService } from '../engineer.service';
import { Engineer } from '../engineer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewallengineers',
  templateUrl: './viewallengineers.component.html',
  styleUrls: ['./viewallengineers.component.css']
})
export class ViewallengineersComponent implements OnInit {
engineer:Engineer[];
  constructor(private engineerservice:EngineerService,private router:Router) { }

  ngOnInit(): void {
    this.method();
  }
  method()
  {
    this.engineerservice.getallengineers().subscribe(data=>{
      this.engineer=data;
      });
  }

  delete(id:number)
  {
    this.engineerservice.deletengineer(id).subscribe(data=>{
      this.method();
    });
  }

  update(id:number)
  {
    this.router.navigate(['updateengineer',id]);
  }

}
