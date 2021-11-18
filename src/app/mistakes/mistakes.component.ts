import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mistakes',
  templateUrl: './mistakes.component.html',
  styleUrls: ['./mistakes.component.css']
})
export class MistakesComponent implements OnInit {

  @Input() mistakes: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
