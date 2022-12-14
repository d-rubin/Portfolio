import { Component, OnInit } from '@angular/core';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private _imprint: any = false;

  constructor(private footer: FooterComponent) { }

  ngOnInit(): void {
  }

  showImprint() {
    this.footer.showImprint();
  }

  closeImprint() {
    this.footer.closeImprint();
  }
}
