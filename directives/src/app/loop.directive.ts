import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appLoop]',
})
export class LoopDirective {
  @Input('appLoop') set render(steps: number) {
    // clear the contents of the element
    this.viewContainer.clear();

    for (let step = 0; step < steps; step++) {
      // insert a new element
      this.viewContainer.createEmbeddedView(this.templateRef, { index: step });
    }
  }

  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {}
}
