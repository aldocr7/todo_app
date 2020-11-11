import { Injectable } from '@angular/core';

import { of } from 'rxjs';

import {Todo} from "../model/Todo";


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Todo[];


  constructor() {
    this.todos=[
      {
        id: '111',
        title: "Learn C++",
        isComplete: true,
        date: new Date(),

      },
      {
        id: '222',
        title: "Learn React",
        isComplete: true,
        date: new Date(),

      },
      {
        id: '333',
        title: "Learn Angular",
        isComplete:false,
        date: new Date(),

      },
    ];
   }
   // method to fetch to dos 
   getTodos(){

    return of(this.todos);


   }
   // METHOD TO ADD DATA 

   addTodo(todo: Todo){
     this.todos.push(todo)
   }
   
   changeStatus(todo:Todo){
     this.todos.map( singleTodo => {
       if (singleTodo.id == todo.id) {
         todo.isComplete = ! todo.isComplete;
          
         
       }
     });
     
   }


   deleteTodo(todo: Todo){

    const indexofTodo = this.todos.findIndex(
      (currentObj) => currentObj.id = todo.id
    );
    this.todos.splice(indexofTodo,1);
    
   }

}
