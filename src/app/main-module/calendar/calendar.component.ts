import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CalendarService } from '../common/services/calendar.service';
import { SimplyCalendarModel } from './calendar.model';
import { ContactService } from '../common/services/contact.service';
import { SelectItem } from '../../../assets/primeng/components/common/api';
@Component({
  selector: 'calendar-component',
  template: require('./calendar.component.html'),
})
export class CalendarComponent implements OnInit {
  header: any;
  dialogVisible: boolean = false;
  contactDetailsVisible: boolean = false;
  addContactDialogVisible: boolean = false;
  calendarContact: SimplyCalendarModel;
  showContact: string = 'Pick Contact';
  selectedContact: SelectItem;

  constructor(private calendarService: CalendarService,
              private cd: ChangeDetectorRef,
              private contactService: ContactService) {
  }

  ngOnInit() {
    this.calendarService.getCalendarContacts();
    this.contactService.getMappedContacts();
    this.calendarContact = new SimplyCalendarModel();
    this.header = {
      left: 'prev,next today',
      center: 'title',
      right: 'month,agendaWeek,agendaDay'
    };
  }

  handleDayClick(e) {
    this.calendarContact = new SimplyCalendarModel();
    this.calendarContact.start = e.date.format();
    this.calendarContact.end = e.date.format();
    this.contactDetailsVisible = false;
    this.dialogVisible = true;
    this.cd.detectChanges();
  }

  handleEventClick(e) {
    this.calendarContact = new SimplyCalendarModel();
    this.contactDetailsVisible = true;
    let start = e.calEvent.start;
    let end = e.calEvent.end;
    if (e.view.name === 'month') {
      start.stripTime();
    }
    if (end) {
      end.stripTime();
      this.calendarContact.end = end.format();
    } else {
      this.calendarContact.end = start.format();
    }
    this.calendarContact.$key = e.calEvent.$key;
    this.calendarContact.parentKey = e.calEvent.parentKey;
    this.calendarContact.title = e.calEvent.title;
    this.calendarContact.start = start.format();
    this.dialogVisible = true;
  }

  editContact() {
    this.calendarService.updateCalendarContact(this.calendarContact);
    this.calendarService.getCalendarContacts();
    this.dialogVisible = false;
  }

  deleteContact() {
    this.dialogVisible = false;
    this.calendarService.deleteCalendarContact(this.calendarContact.$key);
  }

  showAddContactDialog() {
    this.dialogVisible = false;
    this.addContactDialogVisible = true;
  }

  selectContact(contact: SelectItem) {
    this.selectedContact = contact;
    this.showContact = contact.value;
  }

  send() {
    let model = new SimplyCalendarModel();
    model.parentKey = this.selectedContact.label;
    model.title = this.selectedContact.value;
    model.end = this.calendarContact.end;
    model.start = this.calendarContact.start;
    this.calendarService.insertCalendarContact(model);
    this.addContactDialogVisible = false;
    this.dialogVisible = false;
    this.contactDetailsVisible = false;
  }
}
