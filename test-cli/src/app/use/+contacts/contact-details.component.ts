import {Component, Input, OnInit} from '@angular/core';
import {Contact} from "./contact";

@Component({
  selector: 'pop-up',
  template: require('./contact-details.component.html'),
  styles:[
    `
      label{
        display: inline-block;
        width:150px;
       }
      input{
        width:250px;
        }
    `
  ],
})
export class ContactViewComponent{
 @Input()
 contact:Contact;

  constructor(){
  }

}
