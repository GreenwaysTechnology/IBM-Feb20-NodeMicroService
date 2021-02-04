const USERS = require('../mock-data/users-mock');

class UserService {
    constructor() {
    }
    findAll() {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 5000, USERS);
        });
    }
    
}

module.exports = new UserService();

