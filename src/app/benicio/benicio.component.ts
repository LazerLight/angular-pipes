import { Component, OnInit } from '@angular/core';

import { Actor, benicioList } from './benicio-data';

@Component({
  selector: 'app-benicio',
  templateUrl: './benicio.component.html',
  styleUrls: ['./benicio.component.css']
})
export class BenicioComponent implements OnInit {

  userInput: string;
  benicios: Array<Actor> = benicioList;

  constructor() { }

  ngOnInit() {
  }

}
