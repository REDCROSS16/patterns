
//  Паттерн СИНГЛТОН - создает только 1 объект класса!
class Database {
    constructor (data) {
    if (Database.exists) { 
        return Database.instance;
    }

        Database.instance = this;
        Database.exists = true;
        this.data = data;
    }

    getData() {
        return this.data;
    }
}

const mongo = new Database('MongoDB');
console.log(mongo.getData());

const mysql = new Database('Mysql');
console.log(mysql.getData());