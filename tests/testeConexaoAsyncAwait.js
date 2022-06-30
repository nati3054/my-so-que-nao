const sequelize = require("sequelize");

// 2- elecar os dados para conexão com o Bd
const config = {
    username:"root",
    password:"progamadores",
    host:"localhost",
    port:3306,
    dialect:"mysql",
    database:"osmaker"
}
// 3- criar a conexão como o banco 
const conexao = new sequelize(config)

let carregarFuncionarios = async ()=>{
    let resultado = await conexao.query("SELECT * FROM funcionarios");
    console.log(resultado);
}

// Executar a função carregarFuncionarios
carregarFuncionarios();