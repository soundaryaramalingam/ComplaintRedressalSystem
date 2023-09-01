import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RegistercomplaintComponent } from './registercomplaint/registercomplaint.component';
import { ViewallraisedcomplaintsformanagerComponent } from './viewallraisedcomplaintsformanager/viewallraisedcomplaintsformanager.component';
import { AllocateengineerComponent } from './allocateengineer/allocateengineer.component';
import { ViewallraisedcomplaintsforengineerComponent } from './viewallraisedcomplaintsforengineer/viewallraisedcomplaintsforengineer.component';
import { SolveproblembyengineerComponent } from './solveproblembyengineer/solveproblembyengineer.component';
import { ViewallcomplaintsforuserComponent } from './viewallcomplaintsforuser/viewallcomplaintsforuser.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { ViewallusersComponent } from './viewallusers/viewallusers.component';
import { ViewallmanagersComponent } from './viewallmanagers/viewallmanagers.component';
import { ViewallengineersComponent } from './viewallengineers/viewallengineers.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { UpdatemanagerComponent } from './updatemanager/updatemanager.component';
import { UpdateengineerComponent } from './updateengineer/updateengineer.component';
import { ViewallcomplaintsComponent } from './viewallcomplaints/viewallcomplaints.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ViewallfeedbacksComponent } from './viewallfeedbacks/viewallfeedbacks.component';
import { IssuesbyuserComponent } from './issuesbyuser/issuesbyuser.component';
import { AllissuesComponent } from './allissues/allissues.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"user/registercomplaint",component:RegistercomplaintComponent},
  {path:"manager/raisedcomplaintsmanager",component:ViewallraisedcomplaintsformanagerComponent},
  {path:"engineer/raisedcomplaintsengineer",component:ViewallraisedcomplaintsforengineerComponent},
  {path:"adminpage",component:AdminpageComponent},
  {path:"user/viewallcomplaintsforuser",component:ViewallcomplaintsforuserComponent},
  {path:"users",component:ViewallusersComponent},
  {path:"managers",component:ViewallmanagersComponent},
  {path:"engineers",component:ViewallengineersComponent},
  {path:"user/feedback",component:FeedbackComponent},
  {path:"feedbacks",component:ViewallfeedbacksComponent},
  {path:"updateuser/:id",component:UpdateuserComponent},
  {path:"updatemanager/:id",component:UpdatemanagerComponent},
  {path:"updateengineer/:id",component:UpdateengineerComponent},
  {path:"user/issue/:id",component:IssuesbyuserComponent},
  {path:"allissues",component:AllissuesComponent},
  {path:"engineer/solveproblem/:id",component:SolveproblembyengineerComponent},
  {path:"complaints",component:ViewallcomplaintsComponent},
  {path:"manager/complaints",component:ViewallcomplaintsComponent},
  {path:"forgotpassword",component:ForgotpasswordComponent},
  {path:"manager/allocateengineer/:id",component:AllocateengineerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
