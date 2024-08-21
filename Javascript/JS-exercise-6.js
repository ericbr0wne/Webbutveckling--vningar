class Car {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    getCarInfo() {
      return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`;
    }
  }

  let myCar = new Car("Toyota", "Camry", 2023);

  let carInfo = myCar.getCarInfo();
  console.log(carInfo); 