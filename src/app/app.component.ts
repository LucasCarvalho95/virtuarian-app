import { Component } from '@angular/core';
import {MotorDataService } from './motor-data.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Motor} from './motor';

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

  addMotor() {
    this.motorDataService.addMotor(this.newMotor);
    this.newMotor = new Motor();
  }

  removeMotor(motor) {
    this.motorDataService.deleteMotorById(motor.id);
  }

  get motors() {
    return this.motorDataService.getAllMotors();
  }

}