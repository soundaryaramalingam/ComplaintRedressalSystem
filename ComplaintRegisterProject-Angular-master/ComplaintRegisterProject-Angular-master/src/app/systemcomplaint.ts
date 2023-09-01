import { Engineer } from "./engineer";
import { Manager } from "./manager";
import { User } from "./user";

export class Systemcomplaint {
  
    id:number;
    user:User;
    manager:Manager;
    engineer:Engineer;
    problem:string;
    constructor(user:User,manager:Manager,engineer:Engineer,problem:string)
    {
      this.user=user;
      this.manager=manager;
      this.engineer=engineer;
      this.problem=problem;
    }
}
