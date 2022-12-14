import { Component, OnInit, ViewChild, ElementRef, VERSION, Input } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  focusName: boolean = false;
  focusEmail: boolean = false;
  focusMessage: boolean = false;

  iconName: string = 'check_circle';
  iconEmail: string = 'check_circle';
  iconMessage: string = 'check_circle';
  

  nameRed: boolean = false;
  nameGreen: boolean = false;  
  emailRed: boolean = false;
  emailGreen: boolean = false;  
  messageRed: boolean = false;
  messageGreen: boolean = false;

  constructor() { 
  }

  ngOnInit(): void {
  }

  changeColors(idField: any, ifFocus: boolean, red: boolean, green: boolean, icon: string) {
    if(idField.value == '' && ifFocus) {
      icon = 'error';
      red = true;
    }
    else if(idField.value != '' && !ifFocus) {
      green = true;
      icon = 'check_circle';
    }
    else {
      green = false;
      red = false
    }
  }
}
