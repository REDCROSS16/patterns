//  Паттерн прототипа для наследования через прототип

const car = {
    wheels: 4,
    init: function () {
        console.log(`У меня есть ${this.wheels} колеса,  мой владелец ${this.owner}`);
    }
}

const carWithOwner = Object.create(car, {
    owner: {
        value: 'Дмитрий'
    }
});

carWithOwner.init();