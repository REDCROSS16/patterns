class MyIterator{
    constructor (data) {
        this.data = data;
        this.index = 0;
    }

    [Symbol.iterator]() {
        return {
            next: () => {
                if (this.index < this.data.length) {
                    return {
                        value: this.data[this.index++],
                        done: false
                    }
                } else {
                    this.index = 0;
                    return {
                        value: void 0,
                        done: true
                    }
                }
            }
        }
    }
}

function* generator (collection) {
    let index = 0;

    while (index < collection.length) {
        yield collection[index++];
    }
}

const iterator = new MyIterator(['this', 'is', 'iterator']);

for (const val of iterator) {
    console.log('value:', val);
}

const gen = generator(['this', 'is', 'iterator']);

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)