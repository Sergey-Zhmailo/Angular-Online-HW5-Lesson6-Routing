import {Directive, ElementRef, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[customClass]',
  host: {
    '(click)': 'addCustomClass()'
  }
})
export class CustomclassDirective {
  @Input('customClass') customClass;

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) { }

  addCustomClass() {
    this.renderer.addClass(this.element.nativeElement, this.customClass);
  }

}
