import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'evn-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {

  @Input() latestEvent: any;
  @Output() eventClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleClickMe() {
   this.eventClick.emit(this.latestEvent.name);
  }
}
