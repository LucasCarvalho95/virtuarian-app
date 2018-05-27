import { Component, Input, OnInit } from '@angular/core';
import { Motor } from '../motor';
import {MotorDataService } from '../motor-data.service';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css'],
  providers: [MotorDataService]
})

export class InputFormComponent implements OnInit {

  @Input() motor: Motor;

  numberPolesOptions = [2,4,6,8];

  voltageOptions = [220,380,440];

  dutyClassOptions = ["S1","S2","S3","S4","S5"];

  backupMotor: Motor;

  constructor(private motorDataService: MotorDataService) {
  }

  ngOnInit() {
    if(this.motor.id) {
      this.backupMotor = this.motor;
    }

  }

  saveMotor(motor: Motor) {
    debugger;

    if(motor.id) {
      this.motorDataService.updateMotorById(motor.id, motor);
      this.backupMotor = this.motor;
    }
    else {
      this.motorDataService.addMotor(Object.assign({}, motor));
      this.clearForm();
    }
  }

  clearForm(){
    if (this.motor.id) {
      this.motor = this.backupMotor;
    }
    else {
      this.motor = new Motor;
    }
  }

  removeMotor(motor) {
    this.motorDataService.deleteMotorById(motor.id);
  }

}
