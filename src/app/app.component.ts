import {Component} from '@angular/core';

@Component({
    selector: 'purchase-app',
    template: `
        <div [ngClass]="{invisible: visibility}">
            <h1>Hello Angular 10</h1>
            <p [ngStyle]="{'font-size':'14px', 'font-family':'Segoe Print'}">
                Angular 10 представляет модульную архитектуру приложения
            </p>
        </div>
        <button (click)="toggle()">Toggle</button>
        
    `,
    styles: [`
        .verdanaFont {
            font-size: 13px;
            font-family: Verdana;
        }

        .navyColor {
            color: navy;
        }

        .invisible {
            display: none;
        }
    `]
})
export class AppComponent {

    isVeranda = true;
    isNavy = true;

    visibility: boolean = true;

    toggle() {
        this.visibility = !this.visibility;
    }


    currentClasses = {
        verdanaFont: this.isVeranda,
        navyColor: this.isNavy
    }

}
