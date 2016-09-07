import {Injectable} from "@angular/core";
import 'rxjs/add/operator/toPromise';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import any = jasmine.any;
import * as firebase from 'firebase';

@Injectable()
export class PictureService{

  constructor ( private af: AngularFire) {

  }

}
