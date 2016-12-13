import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-output-component',
  templateUrl: './input-output-component.component.html',
  styleUrls: ['./input-output-component.component.css']
})
export class InputOutputComponentComponent implements OnInit {

  color: string;
  constructor() { }

  ngOnInit() {
  }

  colorOutput(color) {
    console.log("Got Emitted Color", color);
    this.color= color;
  }

}
