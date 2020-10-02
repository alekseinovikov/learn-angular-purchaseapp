import {Component, Input} from '@angular/core';

@Component({
    selector: 'child-comp',
    template: `<p>Имя пользователя: {{userName}}</p>
    <p>Возраст пользователя: {{userAge}}</p>`,
    styles: [`h2, p {
        color: red;
    }`]
})
export class ChildComponent {

    _userName: string;
    _userAge: number;

    @Input()
    set userName(userName: string) {
        this._userName = userName;
    }

    get userName(): string {
        return this._userName;
    }

    @Input()
    set userAge(age: number) {
        if (age < 0) {
            this._userAge = 0;
            return;
        }

        if (age > 100) {
            this._userAge = 100;
            return;
        }

        this._userAge = age;
    }

    get userAge(): number {
        return this._userAge;
    }
}
