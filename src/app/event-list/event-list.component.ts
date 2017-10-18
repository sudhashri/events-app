import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  event = {
    id: 1,
    name: 'Angular Connect',
    date: '9/26/2036',
    time: '10:10 am',
    price: 599.99,
    imageUrl: '/src/assets/images/angularconnect-shield.png',
    location: {
      address: '1057 DT',
      city: 'London',
      courntry: 'England'
    }
  };

  constructor() { }

  ngOnInit() {
  }

}
