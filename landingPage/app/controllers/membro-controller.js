var MembroModel = require('../models/membro.js');

var membroController = {	
	cadastrar: function(req, res, next){
		var membro = new MembroModel();
		
		membro.nome = req.body.nome;
		membro.email = req.body.email;
		membro.whatsapp = req.body.whatsapp;

		membro.salvar(function(resposta){
			var retorno = '';			
			if (resposta == 0) {
				retorno = 'Ocorreu um erro no seu cadastro, pedimos desculpas pelo inconveniente';
			}
			else if (resposta == 1){
				retorno = 'Parabéns '+ membro.nome +' e bem vindo ao Time Aloha';
			}
			res.render('resultado', {resposta : retorno})
		})		
	}
}

module.exports = membroController;