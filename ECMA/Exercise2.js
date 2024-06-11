// Car prototype
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

Car.prototype.getCarInfo = function() {
    console.log(`Car Info: ${this.make} ${this.model} (${this.year})`);
};

// ElectricCar prototype inheriting from Car
function ElectricCar(make, model, year, batteryCapacity) {
    // Call the Car constructor
    Car.call(this, make, model, year);
    // Add batteryCapacity property
    this.batteryCapacity = batteryCapacity;
}

// Inherit the Car prototype methods
ElectricCar.prototype = Object.create(Car.prototype);
ElectricCar.prototype.constructor = ElectricCar;

// Add a method specific to ElectricCar
ElectricCar.prototype.getBatteryInfo = function() {
    console.log(`Battery Capacity: ${this.batteryCapacity} kWh`);
};

// Demonstrate functionality
const myCar = new Car('Toyota', 'Corolla', 2021);
const myElectricCar = new ElectricCar('Tesla', 'Model 3', 2022, 75);

// Print car info
myCar.getCarInfo(); // Output: Car Info: Toyota Corolla (2021)
myElectricCar.getCarInfo(); // Output: Car Info: Tesla Model 3 (2022)

// Print battery info for electric car
myElectricCar.getBatteryInfo(); // Output: Battery Capacity: 75 kWh
