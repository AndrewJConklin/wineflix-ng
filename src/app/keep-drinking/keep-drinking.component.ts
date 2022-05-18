import { Component, OnInit } from '@angular/core';
import { wines } from '../mock-wines';

@Component({
  selector: 'app-keep-drinking',
  templateUrl: './keep-drinking.component.html',
  styleUrls: ['./keep-drinking.component.css']
})
export class KeepDrinkingComponent implements OnInit {
  finishedWines = wines.filter(wine => wine.isFinished)
  inProgressWines = wines.filter(wine => !!wine.progress)
  constructor() { }

  ngOnInit(): void {
  }

}
