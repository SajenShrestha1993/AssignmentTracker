import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Assignment } from '../assignment.model';
import { AssignmentsService } from 'src/app/shared/assignments.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})
export class AddAssignmentComponent implements OnInit {

  name: string = "Please enter an Assignment name";
  dueDate:Date = new Date() ;
  submissionStatus:string = "not submitted!";
  checked:boolean = false;

  // @Output() newAssignment = new EventEmitter<Assignment>();
  constructor(private assignmentService: AssignmentsService,
              private router: Router){

  }
  ngOnInit() {
  }

  onClick(){
    const assignment = new Assignment();
    assignment.id = Math.floor(Math.random() * Math.floor(100));
    assignment.name = this.name;
    assignment.dueDate = this.dueDate;
    assignment.submitted = this.checked;
    //Emitting the assignment event
    // this.newAssignment.emit(assignment);
    this.assignmentService.addAssignment(assignment)
    .subscribe(res => this.router.navigate(['/home']));
    
  }

  onToggle(){
    if(this.checked === true){
     this.submissionStatus = "submitted!";
    }
    else{
     this.submissionStatus = "not submitted!";
    }
   }
}
