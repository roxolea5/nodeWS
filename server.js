const express = require('express'); //importa express
const app = express();
const server = require('http').Server(app);

const config = require('./config');

const cors = require('cors');
const bodyParser = require('body-parser');
const socket = require('./socket') //referencia a socket
const db = require('./db');
const router = require('./network/routes');

db(config.dbUrl)

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//app.use(router); // esto era para usar el middleware de express

//Para usar el routes, y para pasar el servidor de express que tenemos creado a la app al router para crear rutas necesarias.
socket.connect(server);
router(app);



app.use('/'+ config.publicRoute, express.static('public')) //usará el html que está en los estaticos del public y lo mostrará en el endpoint /app

// app.use('/', function(req, res){
//     res.send('Hola');
// })

server.listen(3000, function(){
    console.log("La aplicación está escuchando en " + config.host + ":" + config.port);
});
