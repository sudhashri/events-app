import { Component, Input, ViewChild, ElementRef } from '@angular/core';

declare var jQuery: any;

@Component({
  selector: 'app-simple-modal',
  templateUrl: './simple-modal.component.html',
  styleUrls: ['./simple-modal.component.css']
})
export class SimpleModalComponent {
  @Input() title: string;
  @Input() elementId: string;
  @Input() closeOnBodyClick: string;
  @ViewChild('modalContainer') containerEle: ElementRef;

  closeModal() {
    if (this.closeOnBodyClick.toLocaleLowerCase() === 'true') {
      jQuery(this.containerEle.nativeElement).modal('hide');
    }
  }
}
