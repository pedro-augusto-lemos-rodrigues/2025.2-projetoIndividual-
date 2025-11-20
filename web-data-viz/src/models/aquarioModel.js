var database = require("../database/config");

function buscarCadastroPorLogin(idLogin){
  var instrucaoSql = `SELECT * FROM login a WHERE fk = ${idCadastro}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


function cadastro(idCadastro, nome, emial, senha) {
  
  var instrucaoSql = `INSERT INTO (nome, email, senha) cadastro VALUES (${nome}, ${email}, ${senha})`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  buscarCadastroPorLogin,
  cadastro
}





// function buscarAquariosPorEmpresa(empresaId) {

//   var instrucaoSql = `SELECT * FROM aquario a WHERE fk_empresa = ${empresaId}`;

//   console.log("Executando a instrução SQL: \n" + instrucaoSql);
//   return database.executar(instrucaoSql);
// }

// function cadastrar(empresaId, descricao) {
  
//   var instrucaoSql = `INSERT INTO (descricao, fk_empresa) aquario VALUES (${descricao}, ${empresaId})`;

//   console.log("Executando a instrução SQL: \n" + instrucaoSql);
//   return database.executar(instrucaoSql);
// }


// module.exports = {
//   buscarAquariosPorEmpresa,
//   cadastrar
// }
