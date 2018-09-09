import {Directive, ElementRef, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[customStyle]',
  host: {
    '(click)': 'addCustomStyle()'
  }
})
export class CustomstyleDirective {
  @Input('customStyle') styleType;

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) { }

  addCustomStyle() {
    for (let key in this.styleType) {
      this.renderer.setStyle(this.element.nativeElement, key, this.styleType[key]);
    }


  }

}
