const privateSpeed = new WeakMap();
const privateWarning = new WeakMap();

class SpeedLimiter {
  constructor(currentSpeed, overSpeed) {
    privateSpeed.set(this, currentSpeed);
    privateWarning.set(this, overSpeed);
    this.maxSpeed = 200;
  }

  accelerate(value) {
    const speed = privateSpeed.get(this) + value;
    console.log(`Current speed: ${speed} km/h`);
    privateSpeed.set(this, speed);
    if (speed > this.maxSpeed) {
      privateSpeed.set(this, this.maxSpeed);
      privateWarning.get(this)();
      console.log(`Current speed: ${privateSpeed.get(this)} km/h`);
    }
  }
  // your code
}