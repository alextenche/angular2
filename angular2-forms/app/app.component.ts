import {Component, View} from 'angular2/core';

export class TodoItem{
  constructor(public text:string, public completed:boolean){

  }
}

@Component({
    selector: 'app'
})

@View({
  templateUrl: 'app.html',
  directives: [NgFor, NgIf]
})

class AppComponent {
  todos: Array<TodoItem>;

  constructor(){
    this.todos = new Array<TodoItem>();
    this.todos.push(new TodoItem("Hello Amelia !", false));
  }

  setCompleted(item:TodoItem, checked:boolean){
    item.completed = checked;
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
      this.setCompleted(todo, true);
    }
  }
}
