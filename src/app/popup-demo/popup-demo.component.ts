import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popup-demo',
  templateUrl: './popup-demo.component.html',
  styleUrls: ['./popup-demo.component.css']
})
export class PopupDemoComponent implements OnInit {
  message: string;
  constructor() {
    this.message = 'This is that';
   }

  ngOnInit() {
  }

}
