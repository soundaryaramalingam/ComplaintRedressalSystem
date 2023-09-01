import { Engineer } from "./engineer";
import { Manager } from "./manager";
import { User } from "./user";

export class Complaint {

id:number;
manager:Manager;
user:User;
engineer:Engineer;
username:string;
address:string;
phoneno:string;
pincode:string;
problem:string;
status:string;
statusvalue:boolean;
date:Date;
constructor(manager:Manager,user:User,username:string,address:string,phoneno:string,
    pincode:string,problem:string,status:string,statusvalue:boolean,date:Date)
{
  this.manager=manager;
  this.user=user;
  this.username=username;
  this.address=address;
  this.phoneno=phoneno;
  this.pincode=pincode;
  this.problem=problem;
  this.status=status;
  this.statusvalue=statusvalue;
  this.date=date;
}
}
