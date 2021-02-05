const { ServiceBroker } = require('moleculer');
const { log } = console;

const broker = new ServiceBroker({
    transporter: "nats://localhost:4444",
    registry: {
        discoverer: "Local",
        //registry :''
    } 
 

});

//consumer service
broker.createService({
    name: 'calculator',
    actions: {
        calculate: {
            async handler(ctx) {
                log('consumer - calculate')
                let result = await ctx.call('adder.add', { a: 10, b: 20 });
                log(`Result is ${result}`)
            }
        }
    }
})

async function init() {
    try {
        await broker.start();
        broker.repl();
    }
    catch (e) {
        log(e);
    }
}
init();
