
const USERS = require('../mockdata/users-mock')

class UserService {
    constructor() {

    }
    //sync
    findAll() {
        return USERS;
    }
    //async versions : callback version and promise 
    findAllCallback(callback) {
        setTimeout(callback, 5000, USERS);
    }
    findAllPromise() {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 5000, USERS);
        });
    }

}
module.exports = new UserService();
