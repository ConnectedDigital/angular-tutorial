import { Component } from '@angular/core';
import { AppState } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class App {
  constructor(
    public appState: AppState) {
  }
  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}
