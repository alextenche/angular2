import {Component, View} from 'angular2/core';
import {NgFor, NgIf} from 'angular2/common';

export class TodoItem{
    constructor(public text:string, public completed: boolean){}
}

@Component({
    selector: 'my-app'
})

@View({
  templateUrl: './app.html',
  directives: [NgFor, NgIf]
})

export class AppComponent {
   todos: Array<TodoItem>;

   constructor(){
     this.todos = new Array<TodoItem>();
     this.todos.push(new TodoItem("Hello Amelia !", false));
   }

   removeTodo(item: TodoItem){
     this.todos.splice(this.todos.indexOf(item), 1);
   }

   doneTyping($event){
     if($event.which === 13){
       this.addTodo($event.target);
     }
   }

   addTodo(input){
     this.todos.push(new TodoItem(input.value, false));
     input.value = '';
   }

   completeAll(){
     for(var todo of this.todos){
       todo.completed = true;

     }
   }
 }
