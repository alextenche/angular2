import { Component, View, NgFor, NgIf } from 'angular2/angular2';
import { FORM_DIRECTIVES, FormBuilder, ControlGroup, Control } from 'angular2/angular2';
import { Validators } from 'angular2/angular2';
import { TodoItem } from 'models';


@Component({
    selector: 'todo'
})

@View({
  template:`
    Welcome to todo page :)
  `
})

export class todo{};
