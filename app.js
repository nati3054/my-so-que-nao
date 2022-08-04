const express = require('express');
const UsuariosRouter = require('./routes/UsuariosRouter');
const app = express();

app.use(express.urlencoded({ extended: false }));

app.use('/', UsuariosRouter);

// dizendo para o express utilizar o ejs como view engine
app.set('view engine', 'ejs')



app.listen(3000, ()=>{console.log("Estou escultando na porta 3000")});
