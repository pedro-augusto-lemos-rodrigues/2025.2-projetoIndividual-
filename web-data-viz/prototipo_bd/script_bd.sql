CREATE DATABASE nettale;

USE nettale;

CREATE TABLE usuario(
	idUsuario int primary key auto_increment, 
	email varchar(50),
	senha varchar(50), 
	nome varchar(50)
);



create table quiz(
	idQuiz int primary key auto_increment, 
	titulo varchar(50), 
	descricao varchar(50)
	
);



create table resposta(
	idResposta int auto_increment, 
	fkQuiz int, 
	fkUsuario int, 
    pontuacao int,
    constraint fkQuiz
		foreign key (fkQuiz) 
			references quiz(idQuiz), 
	constraint fkUsuario
		foreign key (fkUsuario) 
			references usuario(idUsuario), 

constraint pkUsuarioQuiz 
	primary key (idResposta, fkUsuario, fkQuiz)
);


INSERT INTO quiz(titulo, descricao) values
	('GAME SHOW QUIZ', 'Quiz de Undertale com 10 perguntas');
    
    
select * from usuario;
select * from resposta;
