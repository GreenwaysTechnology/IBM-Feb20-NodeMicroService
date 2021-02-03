const getUser = () => {
    //biz logic
    let user = {
        id: 1,
        name: 'admin'
    };
    //user = null;
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
//login; login function will be only if getUser returns user data.
const login = (user) => {
    //biz logic
    return new Promise((resolve, reject) => {
        if (user.name === 'admin') {
            setTimeout(resolve, 1000, { message: 'Login Success' });
        } else {
            setTimeout(reject, 1000, { message: 'login failed' });
        }
    });

}

const showpage = (status) => {
    //biz logic
    return new Promise((resolve, reject) => {
        if (status.message === 'Login Success') {
            setTimeout(resolve, 1000, { message: 'You are admin' });
        } else {
            setTimeout(reject, 1000, { message: 'You are guest' });
        }
    });

};

async function init() {
    try {
        const user = await getUser();
        const status = await login(user);
        const page = await showpage(status);
        console.log(user,status,page)
    }
    catch (err) {
        console.log(err)
    }
}
init();