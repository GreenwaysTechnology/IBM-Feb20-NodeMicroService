const EventEmitter = require('events');

const eventEmiter = new EventEmitter();

//Pub - sub

//register event :Listener
eventEmiter.on('hello', (data) => {
    console.log(data);
});

//Publisher : to emit event and send data

eventEmiter.emit('hello','Hello')

class OrderService extends EventEmitter {
    constructor() {
        super();
        //listener regeration ; event represents object having data .
        this.on('sales', event => {
            console.log(`Got ${event.orderId} ${event.qty} ${event.value}`)
        })
    }
    placeOrder(order) {
        //when ever place order is called, it can emit event
        setTimeout(() => {
          //async event driven programming
            this.emit('sales', order);
        }, 1000)
    }

}
//start
function startApp() {
    let orderService = new OrderService();
    //call biz api
    orderService.placeOrder({ orderId: 'OD001', qty: 100, value: 1000 })
}
startApp();