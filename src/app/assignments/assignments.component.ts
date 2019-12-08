import { Component, OnInit } from '@angular/core';
import { Assignment } from './assignment.model';
import { AssignmentsService } from '../shared/assignments.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {

  title: string = "Assignment Form";
  displayForm: boolean = false;
  name:string = "Assignment 0" ;
  dueDate:Date = new Date('2000-02-02') ;
  checked:boolean = false;
  submissionStatus:string = "not submitted!";
  selectedAssignment: Assignment;
  showDetail: boolean;
  assignments : Assignment[] = [];
  showBackButton: boolean;
  //DI of AssignmentService
  constructor(private assignmentService: AssignmentsService,
              private router: Router) { }
 
  onAdd(){
    // this.displayForm=true;
  }

  goBack(){
    this.displayForm=false;
  }
  ngOnInit() {
    this.getAssignments();
    // this.assignments = this.assignmentService.getAssignments();
  }

  //Retrieving assignment list from the service
  getAssignments(){
    this.assignmentService.getAssignments().
    subscribe(assignments => this.assignments = assignments);
  }

  //adding new assignment to the service
  // onAddNewAssignment(event:Assignment){
  //   // this.assignments.push(event);
  //   this.assignmentService.addAssignment(event)
  //   .subscribe(res => console.log(res));
  //   this.displayForm=false;
  
  // }
  
  //deleting assignment.
  onDelete(_id:string){
    this.assignmentService.deleteAssignment(_id)
    .subscribe(res => {this.router.navigate([''])});
  }
 
  // getListFromService(){
  //   this.getAssignments();
  //   for (let item of this.assignments){
  //     console.log(item.name);
  //   }
  // }
  resetChecked(){
    this.checked = false;
  }

  //selecting assigment to display details
  setAssignment(assignment:Assignment){
    this.router.navigate(['/assignment/' + assignment.id]);
    console.log(assignment.id);
    // this.selectedAssignment = assignment;
    // this.showDetail = true;
    // console.log("selected  assignment: " + assignment.name);
    // console.log(this.showDetail);
    // this.showBackButton =  false;

  }

  

}
