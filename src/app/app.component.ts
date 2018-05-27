import { Component } from '@angular/core';
import {MotorDataService } from './motor-data.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Motor} from './motor';
import {InputFormComponent} from './input-form/input-form.component';
import { throwMatDialogContentAlreadyAttachedError } from '@angular/material';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MotorDataService]
})
export class AppComponent {

  newMotor: Motor = new Motor();

  constructor(private motorDataService: MotorDataService) {
  }

  get motors() {
    return this.motorDataService.getAllMotors();
  }

}