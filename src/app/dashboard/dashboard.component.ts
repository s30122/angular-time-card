import { Component, OnInit,ChangeDetectionStrategy } from '@angular/core';
import { CalendarEvent } from 'calendar-utils';
import { CalendarView,CalendarCommonModule, CalendarMonthModule  } from 'angular-calendar';
import { Subject } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Login } from '../login/login.actions';



@Component({
  selector: 'app-dashboard',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  viewDate=new Date();
  events:CalendarEvent[]=[];
  view: CalendarView = CalendarView.Month;
  refresh: Subject<any> = new Subject();


  constructor() {
   }

  ngOnInit() {
  }
  addEvent(){
    this.events.push({
      start:new Date(),
      title:'小華',
      meta:['08:00','18:00']
    });
    this.refresh.next();
  }

}
