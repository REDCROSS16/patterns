// function Server (name, ip) {
//     this.name = name;
//     this.ip = ip;
// }

// Server.prototype = {
//     getUrl: function () {
//         return `https://${this.ip}:80`;
//     }
// }

serverOne = new Server('localhost', '99.99.99');
console.log(serverOne.getUrl());

class Server {
    constructor(name, ip) {
        this.name = name;
        this.ip = ip;
    }
    getUrl() {
        return `https://${this.ip}:80`;
    }
}
