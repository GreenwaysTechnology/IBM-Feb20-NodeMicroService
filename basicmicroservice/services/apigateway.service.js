const { ServiceBroker } = require('moleculer');
let ApiGateWay = require("moleculer-web");

const { log } = console;

const broker = new ServiceBroker();

// broker.createService({
//     name:'GateWayService',
//     mixins:[ApiGateWay],
//     settings: {
//         routes:[{
//             path:"/api",
//             whitelist: [
//                 // Access any actions in 'hello' service
//                 "hello.*",
//             ]
//         }]
//     }
// })
// broker.createService({
//     name:'apigateway',
//     mixins:[ApiGateWay],
//     settings: {
//         routes:[{
//             path:"/api",
//             aliases: {
//                "hello": "hello.sayHello"
//             }
//         }]
//     }
// });

broker.createService({
    name: 'apigateway',
    mixins: [ApiGateWay],
    settings: {
        routes: [{
            path: "/api",
            aliases: {
                "REST hello": "hello"
            }
        }]
    }
});
broker.createService({
    name: 'hello',
    actions: {
        //define biz api of that service
        list: {
            handler(ctx) {
                //simulating exception,if exeception, cb will open, try to use fallback api
                //let foo = 'foo'
                let foo;
                if (foo) {
                    throw new Error('Something went wrong')
                }
                return 'Hello,Molecular'
            },
            fallback: (ctx, err) => "I am fallback message"
        },

        get(ctx) {
            log(ctx.params)
            return `Hello How are you? ${ctx.params.id}`
        }
    }
});


// broker.createService({
//     name: 'hello',
//     actions: {
//         //define biz api of that service
//         sayHello() {
//             return 'Hello,Molecular'
//         }
//     }
// });

async function init() {
    try {
        await broker.start();
        }
    catch (e) {
        log(e);
    }
}
init();