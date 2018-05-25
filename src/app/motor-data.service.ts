  import {Injectable} from '@angular/core';
  import {Motor} from './motor';

  @Injectable()
  export class MotorDataService {

  lastId: number = 0;

  motors: Motor[] = [];

  constructor() {
  }

  addMotor(motor: Motor): MotorDataService {
    if (!motor.id) {
      motor.id = ++this.lastId;
    }
    this.motors.push(motor);
    return this;
  }

  deleteMotorById(id: number): MotorDataService {
    this.motors = this.motors
      .filter(motor => motor.id !== id);
    return this;
  }

  updateMotorById(id: number, values: Object = {}): Motor {
    let motor = this.getMotorById(id);
    if (!Motor) {
      return null;
    }
    Object.assign(motor, values);
    return motor;
  }

  getAllMotors(): Motor[] {
    return this.motors;
  }

  getMotorById(id: number): Motor {
    return this.motors
      .filter(motor => motor.id === id)
      .pop();
  }

  }