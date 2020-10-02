import {Component, EventEmitter, Output} from '@angular/core';

export class Test {
    constructor(public count: number) {
    }
}

@Component({
    selector: 'child-comp',
    template: `
        <button (click)="change(true)">+</button>
        <button (click)="change(false)">-</button>
    `
})
export class ChildComponent {

    @Output() onChanged: EventEmitter<Test> = new EventEmitter<Test>();

    change(increased: boolean) {
        if (increased) {
            this.onChanged.emit(new Test(1));
        } else {
            this.onChanged.emit(new Test(-1));
        }
    }

}
