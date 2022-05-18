import { Component, OnInit } from '@angular/core';
import { wines } from '../mock-wines';

@Component({
  selector: 'app-wine',
  templateUrl: './wine.component.html',
  styleUrls: ['./wine.component.css']
})
export class WineComponent implements OnInit {
  finishedWines = wines.filter(wine => wine.isFinished)
  inProgressWines = wines.filter(wine => !!wine.progress)


  constructor() { }

  ngOnInit(): void {
  }

}
