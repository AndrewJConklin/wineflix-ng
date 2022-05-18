import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-new-badge',
  templateUrl: './new-badge.component.html',
  styleUrls: ['./new-badge.component.css']
})
export class NewBadgeComponent implements OnInit {
  @Input() isNew?: boolean

  constructor() { }

  ngOnInit(): void {
  }

}
