
const USERS = require('../mockdata/users-mock')


class UserService {
    constructor() {

    }
    findAll() {
        return USERS;
    }
}
module.exports = new UserService();
