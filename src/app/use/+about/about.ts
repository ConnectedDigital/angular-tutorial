import {Component} from '@angular/core';


@Component({
  template: require('./about.html'),
 // imports: [SharedModule]
})
export class About {
  localState = {
    email: ''
  };
  constructor() {
  }

  onSubmit(value, form) {
    if (form.valid) {
      console.log('form value', value);
    } else {
      console.log('form invalid');
    }
  }


}
