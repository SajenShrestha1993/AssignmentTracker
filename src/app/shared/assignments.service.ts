import { Injectable } from '@angular/core';
import { Assignment } from '../assignments/assignment.model';
import { Observable, of } from 'rxjs';
import { LoggingService } from './logging.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {

  url = 'http://localhost:8010/api/assignments';
  urlSingleAssignment = 'http://localhost:8010/api/assignment';
  assignments : Assignment[]= [
    {
      _id: 'ab123',
      id: 1,
      name: <string> 'Math-HW-11',
      dueDate: <Date> new Date('2019-09-01'),
      submitted: <boolean> true
    },
    {
      _id: 'ab1234',
      id: 2,
      name: <string> 'SOCI-HW-9',
      dueDate: <Date> new Date('2019-10-01'),
      submitted: <boolean> false
    },
    {
      _id: 'ab1235',
      id: 3,
      name: <string> 'AI-HW-02',
      dueDate: <Date> new Date('2019-11-01'),
      submitted: <boolean> true
    }
  ]
  
  //Injection LoggingService
  constructor(private loggingService: LoggingService,
              private http:HttpClient) { }

  //method to get assignments
  getAssignments():Observable<Assignment[]>{
    //returning an observable of type: Assignment[]
    // return of(this.assignments);
    return this.http.get<Assignment[]>(this.url);
  }
 
  //method to add a new assignment
  addAssignment(assignment: Assignment):Observable<any>{
    // this.assignments.push(assignment);
    // this.loggingService.log(assignment.name,"added");
    // return of("assignment added! ");
    return this.http.post<Assignment>(this.urlSingleAssignment,assignment);
  }

  //method to update an existing assignment
  updateAssignment(assignmentToBeUpdated: Assignment):Observable<any>{

    // this.assignments.forEach((assignment,i) =>{
    //   if (assignment == assignmentToBeUpdated){
    //     this.assignments[i]=assignmentToBeUpdated;
    //     this.loggingService.log(assignment.name,"updated");
    //   }
    // })
    
    // return of("assignment updated! ");

    return this.http.put(this.urlSingleAssignment,assignmentToBeUpdated);
  }

  //method to delete an assignment
  deleteAssignment(id: string):Observable<any>{
    // let index = this.assignments.indexOf(assignment);
    // this.assignments.splice(index,1);
    // this.loggingService.log(assignment.name,"deleted");
    // return of("assignment deleted!");
    return this.http.delete(this.urlSingleAssignment + '/' + id);
  }

  //method to get assignment by name
  getAssignmnetByName(id: number):Observable<Assignment>{
    // return of(
    //   this.assignments.find(x => x.name === name)
    // );
    console.log("From DB: selected assignment: " + id);
    return this.http.get<Assignment>(this.urlSingleAssignment+ '/' + id);
  }
  
}
