
class GreeterService{
    constructor(){
        console.log('Greeter service is initlaized')
    }
    //biz apis
    sayHai(){
        return 'Hai'
    }
    sayHello(){
        return 'Hello'
    }
    sayGreet(){
        return 'Greet'
    }
}

//here we pack class 
//module.exports = GreeterService;
//here we pack object
module.exports = new GreeterService();