import {Component, OnInit, ChangeDetectorRef} from '@angular/core';
import {CalendarService} from '../common/services/calendar.service';
import {SimplyCalendarModel} from './calendar.model';
import {ContactService} from '../common/services/contact.service';
import {ContactWithKey} from '../contacts/models/contact.model';
import {SelectItem} from '../../../assets/primeng/components/common/api';
@Component({
  selector: 'calendar-component',
  template: require('./calendar.component.html'),
})

export class CalendarComponent implements OnInit {

  con: SelectItem[];

  header: any;
  dialogVisible: boolean = false;
  contactDetailsVisible: boolean = false;
  addContactDialogVisible: boolean = false;
  calendarContact: SimplyCalendarModel;
  pickContact: ContactWithKey;

  constructor(private calendarService: CalendarService,
              private cd: ChangeDetectorRef,
              private contactService: ContactService) {
  }

  ngOnInit() {
    this.calendarService.getCalendarContacts();
    this.contactService.getContacts();
    this.calendarContact = new SimplyCalendarModel();

    this.header = {
      left: 'prev,next today',
      center: 'title',
      right: 'month,agendaWeek,agendaDay'
    };
  }

  handleDayClick(e) {
    this.calendarContact= new SimplyCalendarModel();
    this.calendarContact.start=e.date.format();
    this.calendarContact.end='';
    this.contactDetailsVisible=false;
    this.dialogVisible = true;
    this.cd.detectChanges();
  }

  handleEventClick(e) {
    this.contactDetailsVisible=true;
    let start = e.calEvent.start;
    let end = e.calEvent.end;
    if (e.view.name === 'month') {
      start.stripTime();
    }
    if (end) {
      end.stripTime();
      this.calendarContact.end = end.format();
    }
    this.calendarContact.$key = e.calEvent.$key;
    this.calendarContact.id = e.calEvent.id;
    this.calendarContact.title = e.calEvent.title;
    this.calendarContact.start = start.format();
    this.dialogVisible = true;
  }

  editContact() {
    this.calendarService.updateCalendarContact(this.calendarContact);
    this.calendarService.getCalendarContacts();
  }

  deleteContact() {
    this.dialogVisible = false;
    this.calendarService.deleteCalendarContact(this.calendarContact.$key);
  }

  showAddContactDialog() {
    this.dialogVisible = false;
    this.addContactDialogVisible = true;
  }

  send() {
    var model = new SimplyCalendarModel();
    model.end = '2016-01-03';
    model.start = '2016-01-01';
    model.id =  '-KSSmfG-A-hsQZR_lEWN';
    model.title = 'test lol';
    this.calendarService.insertCalendarContact(model);
    this.addContactDialogVisible=false;
    this.dialogVisible = false;
    this.contactDetailsVisible = false;
  }
}
