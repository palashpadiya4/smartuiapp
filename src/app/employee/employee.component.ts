import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { EmployeeService } from 'src/employee.service';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog'; 
import { DialogbodyComponent } from '../dialogbody/dialogbody.component';
import { DialogbodyrejectComponent } from '../dialogbodyreject/dialogbodyreject.component';
@Component({ 
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
employeelist:any;
feedbackifnolist:any;
candidateexplist: any;
  ctcdetailslist: any;
  ctchistorylist: any;

constructor(private employee:EmployeeService,private matDialog:MatDialog){

}
openDialog(){
  this.matDialog.open(DialogbodyComponent,{
    width:'350px',
  
  })

  
}
openDialogreject(){
  this.matDialog.open(DialogbodyrejectComponent,{
    width:'350px',
  })}
  ngOnInit():  void{
this.employee.getEmployeelist().subscribe((response) => {
  this.employeelist = response;
 console.log(this.employeelist);
});

this.employee.getfeedbackifnolist().subscribe((response) => {
  this.feedbackifnolist = response;
 console.log(this.feedbackifnolist);
});
this.employee.getcandidateexplist().subscribe((response) => {
  this.candidateexplist = response;
 console.log(this.candidateexplist);
});
this.employee.getctcdetailslist().subscribe((response) => {
  this.ctcdetailslist = response;
 console.log(this.ctcdetailslist);
});
this.employee.getctchistorylist().subscribe((response) => {
  this.ctchistorylist = response;
 console.log(this.ctchistorylist);
});  

}
}
