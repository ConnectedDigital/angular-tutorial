import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
@Injectable()
export class DataResolver implements Resolve<any> {
  constructor() {
  }

  resolve() {
    return Observable.of({res: 'I am data'});
  }
}
export const APP_RESOLVER_PROVIDERS = [
  DataResolver
];
