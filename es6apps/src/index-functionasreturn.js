function sayGreet(){
    return function(){
        console.log('hello')
    }
}
let res= sayGreet()
res()