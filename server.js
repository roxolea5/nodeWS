const express = require('express'); //importa express
const bodyParser = require('body-parser')

const response = require('./network/response') //llama al modulo local

const router = express.Router();

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(router);

router.get('/message', function(req, res){
    response.success(req, res, 'Lista de mensajes', 202) //va a la respuesta success y me da la respuesta
    
});

router.post('/message', function(req, res){
    console.log(req.body);
    if (req.query.error == "ok"){
        response.error(req, res, 'Error simulado', 400);
    } else {
        response.success(req, res, 'Creado correctamente', 201);
    }
    
});

router.delete('/message', function(req, res){
    res.send('Mensaje borrado')
});

app.use('/app', express.static('public')) //usará el html que está en los estaticos del public y lo mostrará en el endpoint /app

// app.use('/', function(req, res){
//     res.send('Hola');
// })

app.listen(3000);
console.log("La aplicación está escuchando en http://localhost:3000")