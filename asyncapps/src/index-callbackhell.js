//callback nesting/compostion

const getUser = (resolve, reject) => {
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
        setTimeout(resolve, 1000, user)
    } else {
        setTimeout(reject, 1000, err)
    }
};
//Login function is called with user as input.
const login = (user, resolve, reject) => {
    let status = "Login success"
    let err = "Login failed"
    //bizlogic
    if (user.name === 'admin') {
        setTimeout(resolve, 1000, status)
    } else {
        setTimeout(reject, 1000, err)
    }
}

const showpage = (status, resolve, reject) => {
    //biz logic
    if (status === 'Login success') {
        setTimeout(resolve, 1000, { message: 'You are admin' });
    } else {
        setTimeout(reject, 1000, { message: 'You are guest' });
    }

}

getUser(user => {
    console.log('get User is called')
    login(user, status => {
        console.log('login is called')
        showpage(status, who => {
            console.log('show page is called')
            console.log(who)
        }, error => {
            console.log(error)
        })
    }, err => {
        console.log(err)
    })
}, err => {
    console.log(err)
})
