const express = require('express');
var cors = require('cors');

class server{
    
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuarioPath = '/api/usuarios';

        //Middlewares
        this.middlewares();
        
        //Rutas de mi aplicacion
        this.routes();
    }

    middlewares(){
        //CORS
        this.app.use(cors());

        //Lectura y parseo del body
        this.app.use(express.json());

        //Directorio publico
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use(this.usuarioPath, require('../routes/usuarios'));

    }

    listen(){
        this.app.listen(this.port, () =>{
            console.log("Sservidores corriendo en puerto", this.port);
        });
        
    }


}

module.exports = server;