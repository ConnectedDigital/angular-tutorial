import {Component, OnInit} from '@angular/core';
import {CalendarService} from '../common/services/calendar.service';
import {DateFormatter} from '@angular/common/src/facade/intl';
@Component({
  template: require('./home.component.html'),
  selector: 'home-component',
})
export class Home implements OnInit {
  constructor(private calendarService: CalendarService) {
  }

  ngOnInit() {
    this.calendarService.getCalendarContactsByDate(DateFormatter.format(new Date(), 'pt', 'yyyy-MM-dd'));
  }

  sendEmails(){

  }
}
