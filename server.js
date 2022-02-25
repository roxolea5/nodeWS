const express = require('express');
const bodyParser = require('body-parser')

const response = require('./network/response')

const router = express.Router();

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(router);

router.get('/message', function(req, res){
    response.success(req, res, 'Lista de mensajes') //va a la respuesta success y me da la respuesta
    
});

router.post('/message', function(req, res){
    console.log(req.body);
    response.success(req, res, 'Creado correctamente')
});

router.delete('/message', function(req, res){
    res.send('Mensaje borrado')
});

// app.use('/', function(req, res){
//     res.send('Hola');
// })

app.listen(3000);
console.log("La aplicación está escuchando en http://localhost:3000")