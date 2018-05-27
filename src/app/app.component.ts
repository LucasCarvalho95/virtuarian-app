import { Component } from '@angular/core';
import {MotorDataService } from './motor-data.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Motor} from './motor';
import { throwMatDialogContentAlreadyAttachedError } from '@angular/material';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MotorDataService]
})
export class AppComponent {

  newMotor: Motor = new Motor();

  numberPolesOptions = [2,4,6,8];

  voltageOptions = [220,380,440];

  dutyClassOptions = ["S1","S2","S3","S4","S5"];

  constructor(private motorDataService: MotorDataService) {
  }

  saveMotor(motor: Motor) {
    debugger;

    if(motor.id) {
      this.motorDataService.updateMotorById(motor.id, motor);
    }
    else {
      this.motorDataService.addMotor(Object.assign({}, motor));
      this.clearForm();
    }
  }

  clearForm(){
    this.newMotor = new Motor();
  }

  removeMotor(motor) {
    this.motorDataService.deleteMotorById(motor.id);
  }

  get motors() {
    return this.motorDataService.getAllMotors();
  }

}