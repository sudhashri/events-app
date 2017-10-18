import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'evn-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {

  @Input() latestEvent: any;

  counter = 0;

  constructor() { }

  ngOnInit() {
  }

  increment() {
    console.log('counter - before increment: ' + this.counter);
    this.counter++;
    console.log('counter - after increment: ' + this.counter);
  }

  decrement() {
    if (this.counter !== 0) {
      console.log('counter - before decrement: ' + this.counter);
      this.counter--;
      console.log('counter - after decrement: ' + this.counter);
    } else {
      console.log('counterer cannot be decremented');
    }
  }
}
