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
        if(senha !== confirmacao){
            res.render('error.ejs', {msg:"Senha não bate com a confirmação" })
            return;
        }
        // caso não bata, mandar mensagem de erro ... finalizar a função

        // Inserir as informações no BD
        const u  = await Usuario.create(
            {
                nome,
                email,
                senha: bcrypt.hashSync(senha, 10)
            }
        )
        req.session.usuario = u;
        // enviar uma mensagem de sucesso
        res.redirect('/home')
    },
    mostrarHome: (req,res)=>{
        res.render('home.ejs',{usuario:req.session.usuario});
    }
}