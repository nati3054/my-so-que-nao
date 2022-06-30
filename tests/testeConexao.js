// 1- importa o sequelize
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

// 4- Realizar uma consulta 
let promessa1= conexao.query("SELECT * FROM funcionarios limit 0,3");
let promessa2= conexao.query("SELECT * FROM oss limit 0,1");
let promessa3= conexao.query("SELECT * FROM bairros limit 0,2");

promessa1.then(
    (dados)=>{console.log(dados)
    conexao.close()
    }
);
promessa2.then(
    ()=>{console.log("Ola!")
    conexao.close()
}
);
promessa3.then(
    ()=>{console.log("Oia!")
    conexao.close()
}
);

