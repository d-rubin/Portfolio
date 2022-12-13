import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  name: any;
  email: any;
  message: any;

  constructor() { 
  }

  ngOnInit(): void {
  }

  checkText(text: string) {
    if(text == '') {
      
    }
  }
}
