import {Directive, ElementRef, Renderer2, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[Bg]',
  host: {
    '(click)': 'whenClick()'
  }
})

export class BgDirective {
  @Input('Bg') bgColor;
  @Input() fontSize;

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) {
    // this.element.nativeElement.style.backgroundColor = '#367fba';
    // this.renderer.setStyle(this.element.nativeElement, 'background', '#367fba');
  }
  // @HostListener('click')  whenClick() {
  //   this.renderer.setStyle(this.element.nativeElement, 'background', '#367fba');
  // }

  whenClick() {
    this.renderer.setStyle(this.element.nativeElement, 'background', this.bgColor);
    this.renderer.setStyle(this.element.nativeElement, 'font-size', this.fontSize);
  }
}
