import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-child-none',
  templateUrl: './child-none.component.html',
  styleUrls: ['./child-none.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ChildNoneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
