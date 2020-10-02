import {Component} from '@angular/core';
import {v4 as uuid} from 'uuid';

class Item {
    id: string;
    purchase: string;
    done: boolean;
    price: number;

    constructor(purchase: string, price: number) {
        this.id = uuid();
        this.purchase = purchase;
        this.price = price;
        this.done = false;
    }
}

@Component({
    selector: 'purchase-app',
    template: `
        <child-comp [userName]="name" [userAge]="age"></child-comp>
        <input type="text" [(ngModel)]="name"/>
        <input type="number" [(ngModel)]="age"/>
    `
})
export class AppComponent {
    name: string = "Tom";
    age: number = 24;
}
