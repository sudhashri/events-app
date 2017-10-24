import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {

  @Input() latestEvent: any;

  constructor() { }

  ngOnInit() {
  }

  getStartTimeClass(): any {
    if (this.latestEvent.time === '8:00 am') {
      return 'green bold';
    }
    return '';
  }


}
