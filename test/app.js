function makeCar () {
    const makes = ['Chevy', 'GM', 'Fiat', 'Webville Motors', 'Tucker'];
    const models = ['Cadillac', '500', 'Bel-Air', 'Taxi', 'Torpedo'];
    const years = [1955, 1957, 1954, 1961];
    const colors = ['red', 'blue', 'tan', 'yellow', 'white'];
    const convertible = [true, false];

    let rand1 = Math.floor(Math.random() * makes.length);
    let rand2 = Math.floor(Math.random() * models.length);
    let rand3 = Math.floor(Math.random() * years.length);
    let rand4 = Math.floor(Math.random() * colors.length);
    let rand5 = Math.floor(Math.random() * 5) + 1;
    let rand6 = Math.floor(Math.random() * 2);

    var car = { 
        make: makes[rand1],
        model: models[rand2],
        year: years[rand3],
        color: colors[rand4],
        passangers: rand5,
        convertible: convertible[rand6],
        mileage: 0
    }

    return car;

}


const newCar = makeCar();
console.log(newCar)