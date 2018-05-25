export class Motor {
	id: number;
	nPoles: number;
	voltage: number;
	dutyCycle: string;
	nomCurrent: number;
	nomPower: number;
	maxTorque: number;

	contructor(values: Object = {}) {
		Object.assign(this, values);
	}
}
