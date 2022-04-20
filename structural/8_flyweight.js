// класс flyweight

class Car {
    constructor(model, price) {
        this.model = model;
        this.price = price;
    }
}

class CarFactory {
    constructor() {
        this.cars = [];
    }

    create (model, price) {
        const candidate = this.getCar(model);
        if (candidate) return candidate;
        
        const newCar = new Car(model, price);

        return newCar;
    }

    getCar(model) {
        return this.cars.find(car => car.model === model);
    }
}