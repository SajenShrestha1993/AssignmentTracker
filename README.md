# Assignment-Todo-List (Angular App)

### What does the app do?
It is a simple todo-list application that students can use to keep track of their assignments.
The interface allows a user to create a list of Assignments and keep track of their due date and submission submission status.
The applicaiton supports full CRUD funtionalities where any CRUD operation happens by using simple ResfulAPIs that makes call to MognoDB to manipulate data.

The project was initiated to explore the core concepts of Angulat 7 by building a complete responsive application from scratch.

Core concepts explored: MVC architeture, SPA, Angular CLI, TypeScript, Angular directives, Data binding, Dynamic Routing, Rest API, RsJx, Angular Modules and Services, DI and Styling with Angular Material. 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.3.

### Techonology Stack:
1) Front-end UI developed using Angular 7: components from Angular Material
2) CRUD RestfulAPI using ExpressJS and Node
3) MongoDB Cloud as NoSql DB

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Also, under project directory, using terminal navigate to `api folder` and Run `node server.js` to expose RestAPIs that the 
applicaion can consume to perform basic CRUD operations.

## Note: This app uses MongoDB Cloud as backend DB. In the `api>server.js` file, the url need to point to your MongoDB Collection. Right now it is pointing to my MongoDB collection.


## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
