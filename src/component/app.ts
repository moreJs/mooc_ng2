import { Component, Input, Output, Attribute } from '@angular/core';


@Component({
    selector: 'ng2-demo',
    templateUrl: '../src/app.template.html'
})
export class AppComponent{
    @Input()
    todos: Array<string> = [ ];
    @Input()
    todo: string = '';
    @Output()
    click: () => {};

    test(@Attribute('morjs') name) {}
    
    add(){

        const annotations = Reflect.getOwnMetadata('annotations', this.constructor);
        const propMetadata = Reflect.getOwnMetadata('propMetadata', this.constructor);
        
        console.log('...', annotations);
        console.log('...', propMetadata);

        this.todos.push(this.todo);
        this.todo = '';
    }
}