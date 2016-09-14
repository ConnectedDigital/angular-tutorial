import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
@Injectable()
export class CalendarService {
  constructor(private http: Http) {
  }

  getEvents() {
    return this.http.get('app/main-module/common/services/data.json')
      .toPromise()
      .then(res => <any[]> res.json().data)
      .then(data => {
        return data;
      });
  }
}
