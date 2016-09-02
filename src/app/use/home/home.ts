import { Component } from '@angular/core';


@Component({
  template: require('./home.html'),
  selector: 'home-component',
})
export class Home {
  constructor() {
    console.log('Home');
  }
}



