var db = require('../../config/app');

var Membro = function(){
	this.nome = '';
	this.email = '';
	this.whatsapp = '';
}

Membro.prototype.salvar = function(callback){

	db.connect("insert into dbaloha.membros(nome, email, whatsapp)values('" 
	+ this.nome + "', '" + this.email +  "', " + this.whatsapp + ")", 
	function(err, resultado){
		if(err){
			console.log(err);
			callback(0)
		}		
		callback(1);
	});
}

module.exports = Membro;