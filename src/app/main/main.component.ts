import { Component, Input, OnInit } from '@angular/core';
import { wines } from '../mock-wines';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  finishedWines = wines.filter(wine => wine.isFinished)
  inProgressWines = wines.filter(wine => !!wine.progress)

  @Input() isFinished = false
  constructor() { }

  ngOnInit(): void {
  }

}
