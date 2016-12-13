import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Hero} from '../hero';
import {ValidationService} from '../validation-service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  heroForm: FormGroup;
  model: Hero;
  submittedModel: Hero;
  powers: string[];
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    
      this.model = new Hero(1, 'The Arrow', 'vigilante persona of Arrow to fight crime and corruption', 'Oliver Queen', 'arrow@superhero.com');
      this.powers = ['Really Smart', 'Super Flexible',  'Hypersound', 'Weather Changer'];

      this.heroForm = this.formBuilder.group({
        name:     [this.model.name, Validators.required],
        alterEgo: [this.model.alterEgo, Validators.required],
        email:    [this.model.email, [Validators.required, ValidationService.emailValidator]],
        power:    [this.model.power, Validators.required]
      });
  }

  onSubmit({ value, valid }: { value: Hero, valid: boolean }) {
    this.submitted = true;
    this.submittedModel = value;

    console.log("Form Submitted successfully.");
  }
}
