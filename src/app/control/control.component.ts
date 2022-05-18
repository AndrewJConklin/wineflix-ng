import { Component, OnInit } from '@angular/core';
import {faPlay, faInfoCircle} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {
  faPlay = faPlay
  faInfoCircle = faInfoCircle

  constructor() { }

  ngOnInit(): void {
  }

}
