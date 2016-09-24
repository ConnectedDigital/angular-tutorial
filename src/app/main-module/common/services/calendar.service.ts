import {Injectable} from '@angular/core';
import {FirebaseListObservable, AngularFire} from 'angularfire2';
import {CalendarModel, SimplyCalendarModel} from '../../calendar/calendar.model';
import 'rxjs/add/operator/toPromise';
import {ContactWithKey, Contact} from '../../contacts/models/contact.model';
import any = jasmine.any;
@Injectable()
export class CalendarService {
  public calendarContacts: FirebaseListObservable<SimplyCalendarModel[]>;

  constructor(private af: AngularFire) {
  }

  getCalendarContacts() {
    this.calendarContacts = this.af.database.list('data/calendar');
    this.af.database.list('data/calendar')
      .subscribe(data => console.log(data),
        err => console.log("Error in getCalendarContacts"));
  }

  insertCalendarContact(data: CalendarModel) {
    this.calendarContacts.push(data);
  }

  deleteCalendarContact(key: string) {
    this.calendarContacts.remove(key);
  }

  updateCalendarContact(data: SimplyCalendarModel) {
    firebase.database().ref('data/calendar/' + data.$key).update({
      end: data.end,
      start: data.start,
      title: data.title,
      id: data.id
    });
  }
//to delete all contacts in calendar
  deleteAllCalendarContact($key: string) {
    this.calendarContacts._ref.on("child_added", function (snapshot, prevChildKey) {
      var readContact = snapshot.val();
      var key = snapshot.key;
      if (readContact.id == $key) {
        firebase.database().ref('data/calendar/' + key).remove();
      }
    });
  }
//to update all contacts in calendar
  updateAllCalendarContact($key: string,contact: Contact) {
    this.calendarContacts._ref.on("child_added", function (snapshot, prevChildKey) {
      var readContact = snapshot.val();
      var key = snapshot.key;
      if (readContact.id == $key) {
        firebase.database().ref('data/calendar/' + key).update({
          title: contact.name+' '+contact.surname
        });
      }
    });
  }
}
