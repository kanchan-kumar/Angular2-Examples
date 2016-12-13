import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-syntax-properties',
  templateUrl: './template-syntax-properties.component.html',
  styleUrls: ['./template-syntax-properties.component.css']
})
export class TemplateSyntaxPropertiesComponent implements OnInit {

   condition = true;

    model = {
        message: 'NG2 World !'
    };

    onClick() {
        alert("Hello !");

        /* Start Debugging through code. Break Points.*/
        debugger;
    }

  constructor() { }

  ngOnInit() {
  }

}
