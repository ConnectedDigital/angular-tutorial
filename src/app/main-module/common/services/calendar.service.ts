import {Http} from "@angular/http";
import {Injectable} from "@angular/core";

@Injectable()
export class CalendarService {

  constructor(private http: Http) {}
  url='src/app/main-module/common/services/data.json';
  getEvents() {
    return this.http.get(this.url)
      .toPromise()
      .then(res => <any[]> res.json().data)
      .then(data => { return data; });
  }
}
