CREATE DATABASE nettale;

USE nettale;

CREATE TABLE cadastro(
idCadastro INT PRIMARY KEY AUTO_INCREMENT,
email VARCHAR(50),
senha VARCHAR(50),
nome VARCHAR(50),
confirmarSenha VARCHAR(50)
);

CREATE TABLE login(
idLogin INT PRIMARY KEY AUTO_INCREMENT,
fkCadastro INT,
CONSTRAINT loginCadastro
	FOREIGN KEY (fkCadastro)
    REFERENCES cadastro(idCadastro)
);



CREATE TABLE quiz(
idQuiz INT PRIMARY KEY AUTO_INCREMENT,
resposta1 VARCHAR(50),
resposta2 VARCHAR(50),
resposta3 VARCHAR(50),
resposta4 VARCHAR(50),
resposta5 VARCHAR(50)
);




CREATE TABLE cadastroQuiz (
idCadastro INT,
fkQuiz INT,

CONSTRAINT fkCadastro
	FOREIGN KEY (idCadastro)
		REFERENCES cadastro(idCadastro),

CONSTRAINT fkQuiz
	FOREIGN KEY (fkQuiz)
		REFERENCES quiz(idQuiz),

CONSTRAINT pkCadQuiz
	PRIMARY KEY (idCadastro, fkQuiz)
);




