import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  
  isnavbar:boolean=false;
  isnavbar1:boolean=false;
  isnavbar2:boolean=false;
  isnavbar3:boolean=false;
  isnavbar4:boolean=false;
  isnavbar5:boolean=false;
  constructor(private router:Router)
  {

  }
  title = 'ComplaintRegister';
  ngDoCheck(): void {
      var uri=this.router.url;
      if(uri=="/")
      {
        this.isnavbar=true;
        this.isnavbar1=true;
        this.isnavbar2=false;
        this.isnavbar3=false;
        this.isnavbar4=false;
        this.isnavbar5=false;
      }
      else if(uri=="/login" || uri=="/forgotpassword")
      {
        this.isnavbar=true;
        this.isnavbar1=false;
        this.isnavbar2=false;
        this.isnavbar3=false;
        this.isnavbar4=false;
        this.isnavbar5=false;
      }
      else if(uri=="/register" || uri=="/users" || uri=="/managers" || uri=="/engineers" || uri=="/complaints"
      || uri.match("/updateuser") || uri.match("/updatemanager") || uri.match("/updateengineer") 
      || uri=="/allissues" || uri=="/feedbacks")
      {
        this.isnavbar=false;
        this.isnavbar1=false;
        this.isnavbar2=true;
        this.isnavbar3=false;
        this.isnavbar4=false;
        this.isnavbar5=false;
      }
      else if(uri=="/user/registercomplaint" || uri=="/user/viewallcomplaintsforuser" ||
      uri=="/user/feedback")
      {
        this.isnavbar=false;
        this.isnavbar1=false;
        this.isnavbar2=false;
        this.isnavbar3=true;
        this.isnavbar4=false;
        this.isnavbar5=false;
      }
      else if(uri=="/manager/raisedcomplaintsmanager" || uri=="/manager/complaints" || uri.match("/manager/allocateengineer")
     )
      {
        this.isnavbar=false;
        this.isnavbar1=false;
        this.isnavbar2=false;
        this.isnavbar3=false;
        this.isnavbar4=true;
        this.isnavbar5=false;
      }
      else if(uri=="/engineer/raisedcomplaintsengineer" || uri.match("/engineer/solveproblem")
      )
       {
         this.isnavbar=false;
         this.isnavbar1=false;
         this.isnavbar2=false;
         this.isnavbar3=false;
         this.isnavbar4=false;
         this.isnavbar5=true;
       }
      else{
        this.isnavbar=false;
        this.isnavbar1=false;
        this.isnavbar2=false;
        this.isnavbar3=false;
        this.isnavbar4=false;
        this.isnavbar5=false;
      }
  }
}
