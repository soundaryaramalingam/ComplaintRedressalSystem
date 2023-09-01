import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewallusers',
  templateUrl: './viewallusers.component.html',
  styleUrls: ['./viewallusers.component.css']
})
export class ViewallusersComponent implements OnInit {
user:User[];
  constructor(private userservice:UserService,private router:Router) { }

  ngOnInit(): void {
   this.method();
  }

  method()
  {
    this.userservice.getallusers().subscribe(data=>{
      this.user=data;
       });
  }
  delete(id:number)
  {
    this.userservice.deleteuser(id).subscribe(data=>{
      this.method();
    });

  }

  update(id:number)
  {
 this.router.navigate(['updateuser',id]);
  }

}
