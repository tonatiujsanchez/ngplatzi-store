import { Directive, ElementRef, Input } from '@angular/core';


@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() bg: string ="#CCCCCC";
  @Input() color: string="red";
  constructor(
    private element: ElementRef
  ) { 
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.element.nativeElement.style.backgroundColor = this.bg;
    this.element.nativeElement.style.color = this.color;
     
   }
}
