// import { Injectable } from '@angular/core';
// import { FirebaseListObservable, AngularFire } from 'angularfire2';
// import { CalendarModel, SimplyCalendarModel } from '../../calendar/calendar.model';
// import 'rxjs/add/operator/toPromise';
// import { Contact } from '../../contacts/models/contact.model';
// import any = jasmine.any;
// let moment = require('moment');
// @Injectable()
// export class CalendarService {
//   public calendarContacts: FirebaseListObservable<SimplyCalendarModel[]>;
//   public selectedContactsByDate: SimplyCalendarModel[];
//
//   constructor(private af: AngularFire) {
//   }
//
//   getCalendarContacts() {
//     this.calendarContacts = this.af.database.list('data/calendar');
//     this.af.database.list('data/calendar')
//       .subscribe(data => console.log(data),
//         err => console.log('Error in getCalendarContacts'));
//   }
//
//   getCalendarContactsByDate(date: string) {
//     this.af.database.list('data/calendar').map(val => {
//       this.selectedContactsByDate = [];
//       return val.map((calendarContact) => {
//         if (this.checkDate(date, calendarContact)) { // if calendarContact is today
//           this.selectedContactsByDate.push(calendarContact);
//         }
//       });
//     }).subscribe(data => console.log(this.selectedContactsByDate));
//   }
//
//   insertCalendarContact(data: CalendarModel) {
//     this.calendarContacts.push(data);
//   }
//
//   deleteCalendarContact(key: string) {
//     this.calendarContacts.remove(key);
//   }
//
//   updateCalendarContact(data: SimplyCalendarModel) {
//     firebase.database().ref('data/calendar/' + data.$key).update({
//       end: data.end,
//       start: data.start,
//       title: data.title,
//       parentKey: data.parentKey
//     });
//   }
//
//   // to delete all contacts in calendar
//   deleteAllCalendarContact($key: string) {
//     this.calendarContacts._ref.on('child_added', function (snapshot, prevChildKey) {
//       let readContact = snapshot.val();
//       let key = snapshot.key;
//       if (readContact.parentKey === $key) {
//         firebase.database().ref('data/calendar/' + key).remove();
//       }
//     });
//   }
//
//   // to update all contacts in calendar
//   updateAllCalendarContact($key: string, contact: Contact) {
//     this.calendarContacts._ref.on('child_added', function (snapshot, prevChildKey) {
//       let readContact = snapshot.val();
//       let key = snapshot.key;
//       if (readContact.parentKey === $key) {
//         firebase.database().ref('data/calendar/' + key).update({
//           title: contact.name + ' ' + contact.surname
//         });
//       }
//     });
//   }
//
//   checkDate(date: string, calendarContact: SimplyCalendarModel) {
//     let start, end;
//     let fixedEndString;
//     end = new Date(calendarContact.end);
//     start = new Date(calendarContact.start);
//     if (calendarContact.end != calendarContact.start) { // must be !=, not !==
//       fixedEndString = end.getFullYear();
//       fixedEndString += '-';
//       fixedEndString += (((end.getMonth() + 1) >= 10) ? (end.getMonth() + 1) :
//       '0' + (end.getMonth() + 1));
//       fixedEndString += '-';
//       if ((((end.getDate()) >= 10) ? (end.getDate()) : '0' + (end.getDate())) == 1) { // must be ==, not ===
//         fixedEndString += ((end.getDate()) >= 10) ? (end.getDate()) : '0' + (end.getDate());
//       } else {
//         fixedEndString += ((end.getDate()) >= 10) ? (end.getDate() - 1) : '0' + (end.getDate() - 1);
//       }
//     } else {
//       fixedEndString = calendarContact.end;
//     }
//     let range = moment.range(start, new Date(fixedEndString));
//     return range.contains(new Date(date));
//   }
// }
