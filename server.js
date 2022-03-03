const express = require('express'); //importa express
const bodyParser = require('body-parser')

const router = require('./network/routes');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//app.use(router); // esto era para usar el middleware de express

//Para usar el routes, y para pasar el servidor de express que tenemos creado a la app al router para crear rutas necesarias.

router(app);



app.use('/app', express.static('public')) //usará el html que está en los estaticos del public y lo mostrará en el endpoint /app

// app.use('/', function(req, res){
//     res.send('Hola');
// })

app.listen(3000);
console.log("La aplicación está escuchando en http://localhost:3000")