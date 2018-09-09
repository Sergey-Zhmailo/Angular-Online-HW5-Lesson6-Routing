import {Directive, Input, OnChanges, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[myLoop]'
})
export class MyLoopDirective implements OnChanges {
  @Input() myLoopOf: Array<any>;

  constructor(
    private template: TemplateRef<any>,
    private container: ViewContainerRef
  ) { }

  ngOnChanges() {
    for (let item of this.myLoopOf) {
      this.container.createEmbeddedView(this.template, {
        $implicit: item,
        index: this.myLoopOf.indexOf(item)
      });
    }
  }

}
