const http = require ("http");

/*

//creas un servidor y lo pones a escuchar en el puerto 3000 (los mas comunes)

http.createServer(function (req, res) {
    console.log("nueva peticion");
    console.log(req.url);
//escribir respuesta al usuario
    res.writeHead (201,{'content-Type' : 'text/plain'})
    res.write("hola, ya se usar HTTP de nodeJS");

    res.end();
}).listen(3000);

console.log("Escuchando http en el puerto 3000")

*/

//de una manera mas elegante

http.createServer(router).listen(3000);

function router(req, res){
    console.log("nueva peticion");
    console.log(req.url);

    switch (req.url){
        case "/hola" :
            res.write("hola, que tal");
            res.end();
            break;

        default:
            res.write("error 404")
    }

}
/*
    res.writeHead (201,{'content-Type' : 'text/plain'})
    res.write("hola, ya se usar HTTP de nodeJS");

    res.end();
}).listen(3000);

console.log("Escuchando http en el puerto 3000")
*/