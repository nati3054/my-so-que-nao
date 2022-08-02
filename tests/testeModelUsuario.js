const {Usuario, sequelize} = require('../database/models');
let teste = async () => {
    let usuarios = await Usuario.findAll({include:["publicacoes","amigos"]});
    let usuariosSimplificados = usuarios.map(u => u.toJSON())
    console.log(usuariosSimplificados[0]);
    sequelize.close();
}


teste();