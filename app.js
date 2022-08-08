const express = require('express');
const session = require('express-session');
const UsuariosRouter = require('./routes/UsuariosRouter');
const app = express();

app.use(express.urlencoded({ extended: false }));

// dizendo para o express utilizar o ejs como view engine
app.set('view engine', 'ejs')
app.use(session({
    secret:'SEGREDO',
    resave:false,
    saveUninitialized:true
}));

app.use('/', UsuariosRouter);

app.listen(3000, ()=>{console.log("Estou escultando na porta 3000")});
