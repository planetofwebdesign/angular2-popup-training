import { Directive, Input, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appPopup]',
  exportAs: 'popup'
})
export class PopupDirective {

  @Input() message: String;
  constructor(elementRef: ElementRef) {
    console.log('This is popup constructor');
  }

  @HostListener('click')
  displayMessage() {
    alert(this.message);
  }
}
