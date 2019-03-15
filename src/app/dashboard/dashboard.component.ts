import { Component, OnInit, } from '@angular/core';
import { CalendarEvent } from 'calendar-utils';
import { CalendarView } from 'angular-calendar';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  viewDate=new Date();
  events:CalendarEvent[];
  view: CalendarView = CalendarView.Month;
  constructor() { }

  ngOnInit() {
  }

}
