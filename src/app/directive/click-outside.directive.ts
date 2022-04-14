import {Directive, ElementRef, EventEmitter, HostListener, Output} from '@angular/core'

@Directive({
  selector: '[clickOutside]',
})
export class ClickOutsideDirective {

  @Output() clickOutside = new EventEmitter<UIEvent>()

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event', '$event.target'])
  public onClick(event: MouseEvent, targetElement: HTMLElement): void {
    if (!targetElement) {
      return
    }
    const clickedInside = this.elementRef.nativeElement.contains(targetElement)
    if (!clickedInside) {
      this.clickOutside.emit(event)
    }
  }

  @HostListener('document:keydown.escape', ['$event'])
  public onEsc(event: KeyboardEvent): void {
    this.clickOutside.emit(event)
  }


}
