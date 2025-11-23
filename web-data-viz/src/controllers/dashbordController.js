var dashbordModel = require("../models/dashbordModel");


function cadastrar(req, res) {
    var fkUsuario = req.body.fkUsuarioServer;
    var fkQuiz = req.body.fkQuizServer;
    var pontuacao = req.body.pontuacaoServer;

    dashbordModel.cadastrar(fkUsuario, fkQuiz, pontuacao)
        .then(
            function (resultado) {
                console.log('a' + resultado)


                res.status(200).send(resultado);

                console.log('b');
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );

}






module.exports = {
    cadastrar
}