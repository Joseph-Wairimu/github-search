import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appColorHover]'
})
export class ColorHoverDirective {

  
  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('magenta');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
