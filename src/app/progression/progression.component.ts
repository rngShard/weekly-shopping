import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

import { DinnerService } from './dinner/dinner.service';
import { Dinner } from './dinner/dinner';

enum Weekdays {
}

@Component({
  selector: 'app-progression',
  templateUrl: './progression.component.html',
  styleUrls: ['./progression.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }]
})
export class ProgressionComponent implements OnInit {
  WEEKDAYS = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"];
  dinners: Dinner[];

  dinnersFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(
    private dinnerService: DinnerService,
    private _formBuilder: FormBuilder
  ) {
    this.dinners = [];

    this.dinnersFormGroup = this._formBuilder.group({
      Montag: [null, Validators.required],    // [default value], [validation]
      Dienstag: [null, Validators.required],
      Mittwoch: [null, Validators.required],
      Donnerstag: [null, Validators.required],
      Freitag: [null, Validators.required],
      Samstag: [null, Validators.required],
      Sonntag: [null, Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.dinners = this.dinnerService.getDinners();
  }

  info() {
    console.log(this.dinnersFormGroup.value);
  }
}