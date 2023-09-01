import { Component, OnInit } from '@angular/core';
import { ComplaintService } from '../complaint.service';
import { Complaint } from '../complaint';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewallcomplaintsforuser',
  templateUrl: './viewallcomplaintsforuser.component.html',
  styleUrls: ['./viewallcomplaintsforuser.component.css']
})
export class ViewallcomplaintsforuserComponent implements OnInit {
id:number;
selectedcomplaint:Complaint[]=[];
Key:string='id';
reverse:boolean;
length:number;
chk:boolean=true;

  constructor(private complaintservice:ComplaintService,private router:Router) { }

  ngOnInit(): void {
    
    this.id=parseInt(sessionStorage.getItem("userdetail"));
    this.complaintservice.getallcomplaints().subscribe(data=>{
     this.length=data.length;
     for(let i=(this.length)-1;i>=0;i--)
     
      if (data[i].user.id==this.id)
      {
         this.selectedcomplaint.push(data[i]);
      }
     
     this.sort('id');
    });
  }


  complaintaction(id:number)
  {
     this.complaintservice.getsinglecomplaint(id).subscribe(data=>{
   
    var currdate=new Date();
    
    var tabledate=new Date(data.date);
   
    tabledate.setDate(tabledate.getDate()+2);

  var result:number=Math.abs(Math.ceil((currdate.getDate() - tabledate.getDate()) / (1000 * 60 * 60 * 24)));
    if(result>2)
    {
      this.router.navigate(['/user/issue',id]);
    }
    else{
      alert("you can't register complaint before 2 days before the  date of complaint registration");
    }
    
   
       
  });
  }

  feedbackaction()
  {
    this.router.navigate(['user/feedback']);
  }

  sort(Key)
  {
     this.Key=Key;
     this.reverse=true;
  }

}
