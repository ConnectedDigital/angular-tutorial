import { Component } from '@angular/core';
import { AppState } from '../app.service';


@Component({
  template: require('./home.component.html'),
  selector: 'home-component',
})
export class Home {
  // Set our default values
  localState = { value: '' };
  // TypeScript public modifiers
  constructor(public appState: AppState) {

  }
  ngOnInit() {
    console.log('hello `Home` component');

  }
  submitState(value: string) {
    console.log('submitState', value);
    this.appState.set('value', value);
    this.localState.value = '';
  }
}
