const { ServiceBroker } = require('moleculer');
const { log } = console;
const broker = new ServiceBroker();

broker.createService({
    name: 'hello',
    actions: {
        //define biz api of that service
        sayHello(ctx) {
            const { name } = ctx.params;
            return `Hello,${name}`;
        }
    }
});

async function init() {
    try {
        await broker.start();
        let response;
        response = await broker.call('hello.sayHello', { name: 'Subramanian' })
        log(response);
    }
    catch (e) {
        log(e);
    }
}
init();