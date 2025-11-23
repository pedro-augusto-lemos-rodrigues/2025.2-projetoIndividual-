var express = require("express");
var router = express.Router();

var dashbordController = require("../controllers/dashbordController");

//Recebendo os dados do html e direcionando para a função cadastrar de dashbordController.js
router.post("/dashbord", function (req, res) {
    dashbordController.cadastrar(req, res);
})



module.exports = router;