// Constructor function for Car
function Car(make, model) {
  this.make = make;
  this.model = model;
}

// Method added to Car prototype
Car.prototype.getMakeModel = function () {
  return `${this.make} ${this.model}`;
};

// Constructor function for SportsCar inheriting from Car
function SportsCar(make, model, topSpeed) {
  // Call the Car constructor with the make and model arguments
  Car.call(this, make, model);
  
  // Add a property specific to SportsCar
  this.topSpeed = topSpeed;
}

// Inherit the Car prototype in the SportsCar prototype
SportsCar.prototype = Object.create(Car.prototype);

// Set the constructor property of SportsCar to SportsCar
SportsCar.prototype.constructor = SportsCar;

// Method added to SportsCar prototype
SportsCar.prototype.getTopSpeed = function () {
  return this.topSpeed;
};

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
