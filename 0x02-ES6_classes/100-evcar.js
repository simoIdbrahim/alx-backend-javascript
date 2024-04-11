import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this.range = range;
  }

  get range() {
    return this._range;
  }

  set range(val) {
    this._range = val;
  }

  cloneCar() {
    const Undefined = super.constructor[Symbol.undefined];

    return new Undefined();
  }
}
