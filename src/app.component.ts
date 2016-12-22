import { Component } from '@angular/core';


@Component({
    selector: 'ng2-demo',
    templateUrl: '../src/app.template.html'
})
export class AppComponent{
    todos: Array<string> = [ ];
    todo: string = '';
    
    add(){
        this.todos.push(this.todo);
        this.todo = '';
    }
}