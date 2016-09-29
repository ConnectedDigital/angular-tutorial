import { Component, OnInit } from '@angular/core';
import { CalendarService } from '../common/services/calendar.service';
import { DateFormatter } from '@angular/common/src/facade/intl';
@Component({
  template: require('./home.component.html'),
  selector: 'home-component',
})
export class Home implements OnInit {
  constructor(private calendarService: CalendarService) {
  }

  ngOnInit() {
    let date = new Date();
    this.calendarService.getTodaysCalendarContacts(
      DateFormatter.format(date, 'pt', 'yyyy-MM-dd'));

    date.setDate(date.getDate()+1);
    this.calendarService.getTomorowsCalendarContacts(
      DateFormatter.format(date, 'pt', 'yyyy-MM-dd'));
  }
}
