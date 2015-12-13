import { bootstrap, Component, View } from 'angular2/angular2';

import { about } from './components/about/about';
import { todo } from './components/todo/todo';

@Component({
    selector: 'app'
})

@View({
  template: `

  `,
  directives: []
})

class AppComponent { }

bootstrap(AppComponent);
