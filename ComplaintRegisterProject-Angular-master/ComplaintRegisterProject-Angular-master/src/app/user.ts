export class User {
  
    id:number;
    username:string;
    email:string;
    password:string;
    phoneno:string;
    address:string;
    pincode:string;
    constructor(username:string,email:string,password:string,phoneno:string,address:string,pincode:string)
{
 this.username=username;
 this.email=email;
 this.password=password;
 this.phoneno=phoneno;
 this.address=address;
 this.pincode=pincode;
}
}
