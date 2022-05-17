import { Component, OnInit } from '@angular/core';
import {faPlay, faInfoCircle} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faPlay = faPlay
  faInfoCircle = faInfoCircle
  constructor() { }

  ngOnInit(): void {
  }

}
