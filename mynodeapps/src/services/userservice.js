const USERS = require('../mock-data/users-mock');

class UserService {
    constructor() {
    }
    findAll() {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 5000, JSON.stringify(USERS));
        });
    }
    async findAll(){
        return JSON.stringify(USERS) // Promise.resolve(users)
    }
}

module.exports = new UserService();

