import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AssignmentsService } from 'src/app/shared/assignments.service';
import { Assignment } from '../assignment.model';


@Component({
  selector: 'app-edit-assignment',
  templateUrl: './edit-assignment.component.html',
  styleUrls: ['./edit-assignment.component.css']
})
export class EditAssignmentComponent implements OnInit {

  assignment = <Assignment> {};
  name: string = 'hello';
  dueDate: Date;
  checked: boolean;
  submissionStatus: string;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private assignmentService:AssignmentsService) { }

  //Retrieving assignment by ID on init            
  ngOnInit() {
    const nameParam= +this.route.snapshot.params.id; //ID parameter from URL
    this.getAssignmentByName(nameParam);
    let retrievedAssignment = this.getAssignmentByName(nameParam);
    console.log(retrievedAssignment);
    if(this.checked === true){
      this.submissionStatus = "submitted!";
      
     }
     else{
      this.submissionStatus = "not submitted!";
     }
    console.log("Param: "+ nameParam);
    console.log("DueDate: " + this.assignment.dueDate);

  }

  getAssignmentByName(id:number){
    this.assignmentService.getAssignmnetByName(id)
    .subscribe(retrivedAssignment => {this.assignment = retrivedAssignment;
                                          this.name = retrivedAssignment.name;
                                          console.log("rAssignment-name: "+this.name);
                                          this.dueDate = retrivedAssignment.dueDate;
                                          console.log("rAssignment-dueDate: "+this.dueDate);
                                          this.checked = retrivedAssignment.submitted;
                                          console.log("rAssignment-checked? "+this.checked);
                                        });
   

  }

  //Update operation on Submit
  onSubmit(){
    if(this.name){
      this.assignment.name = this.name;
    }
    if(this.dueDate){
      this.assignment.dueDate = this.dueDate;
    }
    this.assignment.submitted = this.checked;
    this.assignmentService.updateAssignment(this.assignment)
    .subscribe(assignment => this.router.navigate(['assignment',this.assignment.id]));

    
  }

  onGoBack(){
    this.router.navigate(['assignment',this.assignment.id]);
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
