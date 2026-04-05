class User {
    constructor(username) {
        this.username = username;
    }
    logMe() {
        console.log(`Username : ${this.username}`);
    }
    static createId() {
        return '123'
    }
}

const Dipak = new User('Dipak');
console.log(Dipak.createId());

class Teacher {
    constructor(username,email) {
        super(username)
        this.email = email;
    }
}

const iphone = new Teacher('iphone','i@phone.com');