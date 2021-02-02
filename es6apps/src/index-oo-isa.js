class Account {
    constructor(id = 'A00010000') {
        this.id = id;
        console.log('account')
    }
    deposit() {
        return 1.5;
    }
}
class SavingsAccount extends Account {
    constructor(id) {
        super(id);
        console.log('SavingsAccount')
    }
    deposit() {
        return 2.5 * super.deposit();
    }
}
let sb = new SavingsAccount('A5554444');
console.log(`Id ${sb.id}  ${sb.deposit()}`)