import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../manager.service';
import { Manager } from '../manager';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewallmanagers',
  templateUrl: './viewallmanagers.component.html',
  styleUrls: ['./viewallmanagers.component.css']
})
export class ViewallmanagersComponent implements OnInit {
manager:Manager[];
  constructor(private managerservice:ManagerService,private router:Router) { }

  ngOnInit(): void {
   this.method();
  }
  method()
  {
    this.managerservice.getallmanagers().subscribe(data=>{
      this.manager=data;
      });
  }

  delete(id:number)
  {
    this.managerservice.deletmanager(id).subscribe(data=>{
    this.method();
    });
  }
  update(id:number)
  {
   this.router.navigate(['updatemanager',id]);
  }

}
