import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-collapsible-well',
  template: `
    <div class='well pointable' (click)='toggleContent()'>
      <h4 class='well-tile'>{{title}}</h4>
      <ng-content *ngIf='visible'></ng-content>
    </div>
  `,
  styles: [`
  div {
    background-color: #2b3e50 !important;
  }
  `]
})
export class CollapsibleWellComponent {
  @Input() title: string;
  visible = true;

  toggleContent() {
    this.visible = !this.visible;
  }
}
