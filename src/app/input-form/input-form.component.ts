import { Component, Input, OnInit, Injectable } from '@angular/core';

import { Motor } from '../motor';
import {MotorDataService } from '../motor-data.service';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
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
      this.updateBackup(this.motor);
    }
  }

  updateBackup(motor: Motor) {
    this.backupMotor = Object.assign({},motor);
  }

  saveMotor(motor: Motor) {
    if(motor.id) {
      this.motorDataService.updateMotorById(motor.id, motor);
      this.updateBackup(motor);
    }
    else {
      this.motorDataService.addMotor(Object.assign({}, motor));
      this.clearForm();
    }
  }

  cancelMotorChange(){
    this.clearForm();
  }

  clearForm(){
    if (this.motor.id) {
      this.motor = Object.assign({}, this.backupMotor);
    }
    else {
      this.motor = new Motor;
    }
  }

  removeMotor(motor) {
    this.motorDataService.deleteMotorById(motor.id);
  }

}
