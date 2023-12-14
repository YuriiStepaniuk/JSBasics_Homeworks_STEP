class Car {
  constructor(name, model, prodYear, run, price, status) {
    this.name = name;
    this.model = model;
    this.prodYear = prodYear;
    this.run = run;
    this.price = price;
    this.status = status;
  }

  info() {
    console.log(
      `Current car is ${this.name} ${this.model} of ${
        this.prodYear
      } year, with run ${this.run}. The price is ${
        this.price
      }$ and currently car is ${this.status ? 'available' : 'not available'}`
    );
  }

  changeRun(run) {
    this.run = run;
  }

  changePrice(price) {
    this.price = price;
  }
  changeStatus(status) {
    this.status = status;
  }
  displayStatus() {
    console.log(this.status ? 'available' : 'not available');
  }
}

const tesla = new Car('Tesla', 'X', 2017, 22000, 88888, true);
tesla.info();
tesla.changePrice(12);
tesla.info();
tesla.displayStatus();
tesla.changeStatus(false);
tesla.info();
