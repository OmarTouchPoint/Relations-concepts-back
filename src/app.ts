import {Server} from './server/server';
import {envs} from "./config/envs"
(async ()=>{
    main();
})()


function main () {
    console.log(envs.PORT, 'PORT');
    const server = new Server({
        port:envs.PORT,
    })

    server.listen();
}




