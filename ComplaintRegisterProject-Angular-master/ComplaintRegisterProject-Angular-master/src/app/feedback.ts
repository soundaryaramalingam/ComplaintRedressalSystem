import { User } from "./user";

export class Feedback {
    id:number;
    user:User;
   
    review:string;
    problem:string;
    constructor(user:User,problem:string,review:string)
    {
      this.user=user;
      this.problem=problem;
      this.review=review;
    }
}
