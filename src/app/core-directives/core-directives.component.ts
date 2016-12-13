import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-core-directives',
  templateUrl: './core-directives.component.html',
  styleUrls: ['./core-directives.component.css']
})
export class CoreDirectivesComponent implements OnInit {

    heroes = ['Batman', 'Superman', 'Ironman', 'Flash', 'Arrow'];
    show = true;
    hidden = false;
    visibility = 'visible';
    color='blue';

    toggleShow() {
        console.log("Toggle create/destroy element with angular ngIf core directive.");
        this.show = !this.show;
    }

    toggleHidden() {
        console.log("Toggle Show/Hide with css display property.");
        this.hidden = !this.hidden;
    }

    toggleVisible() {
        console.log("Toggle Show/Hide with css visibility property temporary. Preserve the space of element.");
        this.visibility = this.visibility == 'visible' ? 'hidden' : 'visible';
    }

    heroStyleClass(hero) {
     
     return hero;
    }

  constructor() { }

  ngOnInit() {
  }

}
