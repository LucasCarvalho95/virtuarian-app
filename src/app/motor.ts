export class Motor {
	id: number;
	numberPoles: number;
	voltage: number;
	dutyClass: string;
	rtdCurrent: number;
	rtdPower: number;
	maxTorque: number;

	contructor(values: Object = {}) {
		Object.assign(this, values);
	}
}
