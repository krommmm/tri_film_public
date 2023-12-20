const http = require("http");
const app = require("./app");

const server = http.createServer(app);

server.on('listening',()=>{
    const address = server.address();
    console.log(`Le serveur écoute sur le port :${address.port}`);
});

server.on('error',(error)=>{
    if(error.syscall !== 'listen'){
        throw error;
    }

    switch(error.code){
        case 'EACCES':
            console.error('Le port a requiert des privilèges plus élevés');
            process.exit(1);
            break;
            case 'EADDRINUSE':
                console.error('Le port est déjà utilisé');
                process.exit(1);
                break;
                default:
                    throw error;
    }
})

server.listen(2000);