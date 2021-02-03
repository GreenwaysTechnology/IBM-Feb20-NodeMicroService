const { findAll, findAllCallback, findAllPromise } = require('./services/UserService');


async function main() {
    //sync
    // console.log(findAll());
    //console.log('start')
    //  findAllCallback(users=>console.log(users))
    // findAllPromise()
    //     .then(users => console.log(users))
    //     .catch(err => console.log(err))
    try {
        const users = await findAllPromise();
        console.log(users);
    }
    catch (err) {
        console.log(err)
    }
    // console.log('end')

}
main();