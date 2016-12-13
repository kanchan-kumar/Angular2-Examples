import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-ex',
  templateUrl: './pipes-ex.component.html',
  styleUrls: ['./pipes-ex.component.css']
})
export class PipesExComponent implements OnInit {

    message = 'Hello World !';

    date = new Date();

    pi = 3.14159265359;

    percentage = 0.0234;

    amount = 12.1234;

    data = ['A', 'B', 'H', 'C'];

  constructor() { }

  ngOnInit() {
  }

}
