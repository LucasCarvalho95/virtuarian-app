export class Motor {
	id: number;
	numberPoles: number;
	voltage: number;
	dutyClass: string;
	ratedCurrent: number;
	ratedPower: number;
	maxTorque: number;

	contructor(values: Object = {}) {
		Object.assign(this, values);
	}
}
