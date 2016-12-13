import {Component, OnInit, Output, EventEmitter, Input} from "@angular/core";
import {BLUE, RED} from "../constants";

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {

    @Input()
    color: string;

    @Output()
    colorOutput = new EventEmitter();

    choose(color) {
        console.log("Choosing color = " + color);
        this.colorOutput.emit(color);
    }

    reset() {
        this.colorOutput.emit('black');
    }
  constructor() { }

  ngOnInit() {
  }

}
