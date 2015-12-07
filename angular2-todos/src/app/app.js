var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var TodoItem = (function () {
    function TodoItem(text, completed) {
        this.text = text;
        this.completed = completed;
    }
    return TodoItem;
})();
exports.TodoItem = TodoItem;
var AppComponent = (function () {
    function AppComponent() {
        this.todos = new Array();
        this.todos.push(new TodoItem("Hello Amelia !", false));
    }
    AppComponent.prototype.setCompleted = function (item, checked) {
        item.completed = checked;
    };
    AppComponent.prototype.removeTodo = function (item) {
        this.todos.splice(this.todos.indexOf(item), 1);
    };
    AppComponent.prototype.doneTyping = function ($event) {
        if ($event.which === 13) {
            this.addTodo($event.target);
        }
    };
    AppComponent.prototype.addTodo = function (input) {
        this.todos.push(new TodoItem(input.value, false));
        input.value = '';
    };
    AppComponent.prototype.completeAll = function () {
        for (var _i = 0, _a = this.todos; _i < _a.length; _i++) {
            var todo = _a[_i];
            this.setCompleted(todo, true);
        }
    };
    AppComponent = __decorate([
        angular2_1.Component({
            selector: 'app'
        }),
        angular2_1.View({
            templateUrl: 'app.html',
            directives: [angular2_1.NgFor, angular2_1.NgIf]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
})();
angular2_1.bootstrap(AppComponent);
//# sourceMappingURL=app.js.map