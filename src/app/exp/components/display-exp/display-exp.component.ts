import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-display-exp',
  templateUrl: './display-exp.component.html',
  styleUrls: ['./display-exp.component.css'],
})
export class DisplayExpComponent implements OnInit {
  @Input('exp')
  exp: any = [];

  @Output()
  expId: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}
  deleteExep(id: string) {
    this.expId.emit(id);
  }
}
