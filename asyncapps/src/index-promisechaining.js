//callback nesting/compostion

const getUser = () => {
    //biz logic
    let user = {
        id: 1,
        name: 'admin'
    };
    //  user = null;
    let err = {
        message: 'User not found'
    }
    if (user) {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 1000, user)
        });
    } else {
        return new Promise((resolve, reject) => {
            setTimeout(reject, 1000, err)
        });
    }
};
//Login function is called with user as input.
const login = user => {
    let status = "Login success"
    let err = "Login failed"
    //bizlogic
    if (user.name === 'admin') {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 1000, status)
        });
    } else {
        return new Promise((resolve, reject) => {
            setTimeout(reject, 1000, err)
        });
    }
}

const showpage = status => {
    //biz logic
    if (status === 'Login success') {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 1000, { message: 'You are admin' });
        });
    } else {
        return new Promise((resolve, reject) => {
            setTimeout(reject, 1000, { message: 'You are guest' });
        });
    }

}

getUser()
    .then(user => {
        console.log('Get user is called', user)
        login(user)
            .then(status => {
                console.log('login is called', status);
                showpage(status)
                    .then(pageres => {
                        console.log('show page is called', pageres)
                    })
                    .catch(pageerror => console.log(pageerror));
            })
            .catch(err => {
                console.log(err)
            });
    })
    .catch(err => {
        console.log(err)
    });

//simplified way

getUser()
    .then(user => {
        console.log('Get user is called', user)
        return login(user)
    })
    .then(status => {
        console.log('login is called', status);
        return showpage(status);
    })
    .then(page => {
        console.log('show page is called', page)
    })
    .catch(err => {
        console.log(err);
    });

getUser()
    .then(user => login(user))
    .then(status => showpage(status))
    .then(page => console.log('show page is called', page))
    .catch(err => {
        console.log(err);
    });


// getUser(user => {
//     console.log('get User is called')
//     login(user, status => {
//         console.log('login is called')
//         showpage(status, who => {
//             console.log('show page is called')
//             console.log(who)
//         }, error => {
//             console.log(error)
//         })
//     }, err => {
//         console.log(err)
//     })
// }, err => {
//     console.log(err)
// })
