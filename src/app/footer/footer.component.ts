import { Component, Input, OnInit } from '@angular/core';
import { IntroductionComponent } from '../introduction/introduction.component';
import { Injectable } from '@angular/core';

// @Injectable()
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  // @Input() imprint: any = false;

  constructor() { }

  ngOnInit(): void {
  }

  // showImprint() {
  //   this.imprint = true;
  // }

  // closeImprint() {
  //   this.imprint = false;
  // }
}
