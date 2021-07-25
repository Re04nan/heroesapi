const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

const conn = require('./src/config/database');

const routeHeroes = require('./src/routes/heroes');
const routePowerstats = require('./src/routes/powerstats');

app.use(cors());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}))

app.use('/heroes', routeHeroes);
app.use('/heroes', routePowerstats);

app.use((req, res, next) =>{
    const error = new Error('Não encontrado!');
    error.status(404);
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        erro: {
            mensagem: error.mensagem
        }
    });
});

module.exports = app;