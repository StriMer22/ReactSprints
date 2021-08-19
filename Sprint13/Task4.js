class Plane {
    constructor(model, fuelSupply, fuelConsumption) {
      this.model = model;
      this.fuelSupply = fuelSupply;
      this.fuelConsumption = fuelConsumption;
    }
    calcFlightRange() {
      return (this.fuelSupply / this.fuelConsumption) * 100;
    }
    static sortFlightRange(planesArray) {
      planesArray
        .sort((currPlane, secondOne) => {
          return currPlane.calcFlightRange() - secondOne.calcFlightRange();
        })
        .forEach((plane) =>
          console.log(`${plane.model}: ${plane.calcFlightRange()}`)
        );
    }
    // your code
  }
  
  class TransportPlane extends Plane {
    constructor(model, fuelSupply, fuelConsumption, cargo, addTank) {
      super(model, fuelSupply, fuelConsumption);
      this.cargo = cargo;
      this.addTank = addTank;
    }
    calcFlightRange() {
      return ((this.fuelSupply + this.addTank) / this.fuelConsumption) * 100;
    }
    // your code
  }
  
  class PassengerPlane extends Plane {
    constructor(model, fuelSupply, fuelConsumption, passengers, refueling) {
      super(model, fuelSupply, fuelConsumption);
      this.passengers = passengers;
      this.refueling = refueling;
    }
    calcFlightRange() {
      return ((this.fuelSupply + this.refueling) / this.fuelConsumption) * 100;
    }
    // your code
  }
  
  class WarPlane extends Plane {
    constructor(model, fuelSupply, fuelConsumption, missiles, aerodynamicsKoef) {
      super(model, fuelSupply, fuelConsumption);
      this.missiles = missiles;
      this.aerodynamicsKoef = aerodynamicsKoef;
    }
    calcFlightRange() {
      return (
        (this.fuelSupply / this.fuelConsumption) * 100 * this.aerodynamicsKoef
      );
    }
    // your code
  }
  