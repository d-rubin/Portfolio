import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public aboutMe: boolean = false;
  public skills: boolean = false;
  public portfolio: boolean = false;
  public menu: boolean = true;

  @Input() icon:string = 'menu';

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

  public resetSelect() {
    this.aboutMe = false;
    this.skills = false;
    this.portfolio = false;
  }

  mobileMenu() {
    if(this.menu) {
      this.menu = false;
      this.icon = 'close';
    }
    else {
      this.menu = true;
      this.icon = 'menu'
    }
  }

  closeMenu() {
    this.menu = true;
  }
}
