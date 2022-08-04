// importar express
const app = require('express');
const express = require('express');

// importar o controller
const UsuariosController = require('../controller/UsuariosController')


// criar um roteador
const router = express.Router();

// Definir a rota get para /create 
// Essa rota direcionar a requesição para UsuariosController.create (ainda inexistente)

router.get('/create', UsuariosController.create);
router.post('/create', UsuariosController.store);


// Exportar o roteador e utiliza-lo no app.js
module.exports = router;