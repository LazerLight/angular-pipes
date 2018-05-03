import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crypto-tracker',
  templateUrl: './crypto-tracker.component.html',
  styleUrls: ['./crypto-tracker.component.css']
})
export class CryptoTrackerComponent implements OnInit {

  currentPrice: number = 9999;
  timerId: number;

  constructor() { }

  ngOnInit() {
    this.timerId =
      setInterval(() => {
        // increase by 1.5%
        this.currentPrice *= 1.015
      }, 2000);
  }

  ngOnDestroy() {
    // stop the interval when the component is deleted
    clearInterval(this.timerId);
  }

}
