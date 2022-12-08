import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  aboutMe: boolean = false;
  skills: boolean = false;
  portfolio: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }


  select(key: string) {
    switch (key) {
      case 'aboutMe':
        this.aboutMe = true;
        this.skills = false;
        this.portfolio = false;
        break;
      case 'skills':
        this.aboutMe = false;
        this.skills = true;
        this.portfolio = false;
        break;
      default:
        this.aboutMe = false;
        this.skills = false;
        this.portfolio = true;
        break;
    }
  }
}
