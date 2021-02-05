const { ServiceBroker } = require('moleculer');
const { log } = console;

const broker = new ServiceBroker();

//publisher service
broker.createService({
    name: 'addition',
    actions: {
        add: {
            params: {
                a: "number",
                b: "number"
            },
            handler(ctx) {
                const { a, b } = ctx.params;
                return a + b;
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