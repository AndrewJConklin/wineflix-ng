import { Component, OnInit } from '@angular/core';
import {faPlay, faInfoCircle} from '@fortawesome/free-solid-svg-icons';
import { heroContent } from '../hero-content';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  hero = heroContent
  faPlay = faPlay
  faInfoCircle = faInfoCircle
  constructor() { }

  ngOnInit(): void {
  }

}
