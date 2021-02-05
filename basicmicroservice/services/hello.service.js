const { ServiceBroker } = require('moleculer')

//create service broker object

const broker = new ServiceBroker();

//create service and deploy
// {} - service schema ; collection of service properties

broker.createService({
    name: 'hello',
    actions: {
        sayHello() {
            return 'Hello!Moleculer'
        }

    }
})
//
function main() {
    broker.start()
        .then(() => {
            console.log('Here only we can do service interaction')
            //call service
            broker.call('hello.sayHello')
                .then(data => {
                    console.log(data);
                })
                .catch(err => console.log('Service call failed ', err))

        })
        .catch(err => console.log('broker failed', err))
}
async function start() {
    try {
        await broker.start()
        const message = await broker.call('hello.sayHello')
        console.log(message);
    }
    catch (err) {
        console.log(err);
    }
}
start();