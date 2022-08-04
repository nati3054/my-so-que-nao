const {Usuario, sequelize} = require('../database/models');
const bcrypt = require('bcrypt');

module.exports = {
    create: (req,res)=>{
        res.render('usuarioCreate.ejs');

    },
    store: async (req,res)=>{
        // capturar as informações vindas do formulario
        const {nome, email, senha, confirmacao} = req.body;
        // verificar se a senha bate com a confirmação

        // caso não bata, mandar mensagem de erro ... finalizar a função

        // Inserir as informações no BD
        const u  = await Usuario.create(
            {
                nome,
                email,
                senha: bcrypt.hashSync(senha, 10)
            }
        )
        // enviar uma mensagem de sucesso
        res.send(u)
    }
}