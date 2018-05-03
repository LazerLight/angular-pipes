import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-changer',
  templateUrl: './date-changer.component.html',
  styleUrls: ['./date-changer.component.css']
})
export class DateChangerComponent implements OnInit {

  now: Date = new Date();

  constructor() { }

  ngOnInit() {
  }

  addHours(h: number) {
    // make a copy of the date
    const dateCopy = new Date(this.now);
    // calculate new hours by adding to previous hours
    const newHours = dateCopy.getHours() + h;
    // update the date object copy
    dateCopy.setHours(newHours);
    // replace the previous date with the updated copy
    this.now = dateCopy;
  }

  addDays(d: number) {
    this.addHours(d * 24);
  }

  addWeeks(w: number) {
    this.addDays(w * 7);
  }

  resetDate() {
    this.now = new Date();
  }

}
