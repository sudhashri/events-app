import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-collapsible-well',
  template: `
    <div class='well pointable' (click)='toggleContent()'>
      <h4>
        <!-- Select which content to be displayed uinsg 'select'-->
        <ng-content select="[well-title]"></ng-content>
      </h4>
      <ng-content *ngIf='visible' select=".body"></ng-content>
    </div>
  `,
  styles: [
    `
  div {
    background-color: #2b3e50 !important;
  }
  `
  ]
})
export class CollapsibleWellComponent {
  @Input() title: string;
  visible = true;

  toggleContent() {
    this.visible = !this.visible;
  }
}
