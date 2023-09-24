const express = require('express');
const exphbs = require('express-handlebars'); // Se agrega exphbs por convención
const path = require('path'); // Path es una depencia de NodeJS que nos permite obtener la url de los archivos
const router = require('./routes');

const app = express();

//Habilitar Handlebars como view
app.engine('handlebars', 
    exphbs.engine({
        defaultLayout: 'layout'
    })
);
app.set('view engine', 'handlebars');

// static files
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', router()); // Como router es una funcion que estamos importando de routes/index.js agregamos los ();

app.listen(5000);