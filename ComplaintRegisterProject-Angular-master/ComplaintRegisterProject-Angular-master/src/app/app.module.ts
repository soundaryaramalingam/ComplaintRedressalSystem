import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import{HttpClientModule}from '@angular/common/http';
import{ReactiveFormsModule}from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{Ng2OrderModule}from 'ng2-order-pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RegistercomplaintComponent } from './registercomplaint/registercomplaint.component';
import { ViewallraisedcomplaintsformanagerComponent } from './viewallraisedcomplaintsformanager/viewallraisedcomplaintsformanager.component';
import { ViewallraisedcomplaintsforengineerComponent } from './viewallraisedcomplaintsforengineer/viewallraisedcomplaintsforengineer.component';
import { AllocateengineerComponent } from './allocateengineer/allocateengineer.component';
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

@NgModule({
  declarations: [
    AppComponent,
   
    LoginComponent,
    RegisterComponent,
    RegistercomplaintComponent,
    ViewallraisedcomplaintsformanagerComponent,
    ViewallraisedcomplaintsforengineerComponent,
    AllocateengineerComponent,
    SolveproblembyengineerComponent,
    ViewallcomplaintsforuserComponent,
    AdminpageComponent,
    ViewallusersComponent,
    ViewallmanagersComponent,
    ViewallengineersComponent,
    UpdateuserComponent,
    UpdatemanagerComponent,
    UpdateengineerComponent,
    ViewallcomplaintsComponent,
    FeedbackComponent,
    ViewallfeedbacksComponent,
    IssuesbyuserComponent,
    AllissuesComponent,
    ForgotpasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    Ng2OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
