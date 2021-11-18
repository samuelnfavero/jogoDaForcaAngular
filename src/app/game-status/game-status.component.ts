import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-game-status',
  templateUrl: './game-status.component.html',
  styleUrls: ['./game-status.component.css']
})
export class GameStatusComponent implements OnInit {

  @Input() victories: number = 0;

  @Input() defeats: number = 0;

  @Input() attempts: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
