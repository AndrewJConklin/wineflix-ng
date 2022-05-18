import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  links = [{
    name: 'Home',
    hrefUrl: 'https://developer.mozilla.org',
    isActive: true
  },
  {
    name: 'Whites',
    hrefUrl: 'https://developer.mozilla.org',
    isActive: false
  },
  {
    name: 'Red',
    hrefUrl: 'https://developer.mozilla.org',
    isActive: false
  },
  {
    name: 'Blends',
    hrefUrl: 'https://developer.mozilla.org',
    isActive: false
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
