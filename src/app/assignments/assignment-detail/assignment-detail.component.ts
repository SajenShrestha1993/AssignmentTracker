import { Component, OnInit, Input } from '@angular/core';
import { Assignment } from '../assignment.model';
import { AssignmentsService } from 'src/app/shared/assignments.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css']
})
export class AssignmentDetailComponent implements OnInit {

 
  passedAssignment = <Assignment>{};
  //Dependency Injection
  constructor(private assignmentService:AssignmentsService,
                  private route: ActivatedRoute,
                  private router: Router) { }

   ngOnInit() {
    
   
   this.getAssignmentByName();
   console.log("From details page: passedAssignmentName= " + this.passedAssignment.id);
  }

  getAssignmentByName(){
    const id = +this.route.snapshot.params.id;
    console.log("From details page: ID passed = " + id);
    this.assignmentService.getAssignmnetByName(id)
    .subscribe(assignment => this.passedAssignment = assignment);
    
  }

  onCheck(){
    this.passedAssignment.submitted=true;
    this.assignmentService.updateAssignment(this.passedAssignment)
    .subscribe(res => console.log(res));
  }

  onDelete(){
    this.assignmentService.deleteAssignment(this.passedAssignment._id)
    .subscribe(res => this.router.navigate(['/home']));
  }
  
  onEdit(){
    this.router.navigate(['assignment',this.passedAssignment.id,'edit']);
  }
}


