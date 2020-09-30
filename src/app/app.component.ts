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
        <child-comp>Total sum is: {{sum}}</child-comp>
        <div class="page-header">
            <h1> Список покупок </h1>
        </div>
        <div class="panel">
            <div class="form-inline">
                <div class="form-group">
                    <div class="col-md-8">
                        <input class="form-control" [(ngModel)]="text" placeholder="Название"/>
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-md-6">
                        <input type="number" class="form-control" [(ngModel)]="price" placeholder="Цена"/>
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-md-offset-2 col-md-8">
                        <button class="btn btn-default" (click)="addItem(text, price)">Добавить</button>
                    </div>
                </div>
            </div>
            <table class="table table-striped">
                <thead>
                <tr>
                    <th>Предмет</th>
                    <th>Цена</th>
                    <th>Куплено</th>
                    <th>Удалить</th>
                </tr>
                </thead>
                <tbody>
                <tr *ngFor="let item of items">
                    <td>{{item.purchase}}</td>
                    <td>{{item.price}}</td>
                    <td><input type="checkbox" [(ngModel)]="item.done"/></td>
                    <td>
                        <button class="btn btn-default" (click)="delete(item.id)">X</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>`
})
export class AppComponent {
    text: string;
    price: number = 0;

    get sum(): number {
        return this.items
            .map(i => i.price)
            .reduce((a, b) => a + b, 0);
    }

    items: Item[] =
        [
            new Item("Хлеб", 15.9),
            new Item("Масло", 15.9),
        ];

    addItem(text: string, price: number): void {

        if (text == null || text.trim() == "" || price == null)
            return;
        this.items.push(new Item(text, price));

        this.text = '';
        this.price = 0;
    }

    delete(id: string) {
        this.items = this.items.filter(i => i.id != id)
    }

}
