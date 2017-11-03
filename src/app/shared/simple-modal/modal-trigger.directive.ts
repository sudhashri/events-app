import { Directive, OnInit, ElementRef} from '@angular/core';

declare var jQuery: any;

@Directive({
  selector: '[appModalTrigger]'
})
export class ModalTriggerDirective implements OnInit {
  private el: HTMLElement;

  constructor(private _ref: ElementRef) {
    this.el = this._ref.nativeElement;
   }

  ngOnInit() {
    this.el.addEventListener('click', e => {
      jQuery('#simple-modal').modal({});
    });
  }
}
