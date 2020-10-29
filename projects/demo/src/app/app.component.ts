import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo';

  showDefault: boolean = true;
  showNone: boolean = true;
  showDefaultChild: boolean = true;
  showNoneChild: boolean = true;

  toggleDefault() {
    this.showDefault = !this.showDefault;
  }

  toggleNone() {
    this.showNone = !this.showNone;
  }

  toggleDefaultChild() {
    this.showDefaultChild = !this.showDefaultChild;
  }

  toggleNoneChild() {
    this.showNoneChild = !this.showNoneChild;
  }
}
