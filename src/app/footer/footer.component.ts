import { Component, OnInit } from '@angular/core';
import { IntroductionComponent } from '../introduction/introduction.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public imprint: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
}
