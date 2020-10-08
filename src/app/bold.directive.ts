import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from '@angular/core';

@Directive({
    selector: '[bold]'
})
export class BoldDirective {

    private fontWeight = "normal";

    constructor(private element: ElementRef, private renderer: Renderer2){
        this.renderer.setStyle(this.element.nativeElement, "cursor", "pointer");
    }


    @HostBinding("style.fontWeight") get getFontWeight() {
        return this.fontWeight;
    }

    @HostBinding("style.cursor") get getCursor() {
        return "pointer";
    }

    @HostListener("mouseenter") onMouseEnter() {
        this.fontWeight = "bold";
    }

    @HostListener("mouseleave") onMouseLeave() {
        this.fontWeight = "normal";
    }

}
