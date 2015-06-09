var url = window.location.search.replace("?", "");
var itens = url.split("&");

var codigoTurma = window.decodeURIComponent(itens[0]);

var controller = {
	getHorario : function(dia) {
		
		if(dia == null){
			var data = new Date();
			dia = data.getDay();
		}
		
		dia++;
		
		var horarioDaoVar = new horarioDao();
		var horario = horarioDaoVar.getHorario(codigoTurma, dia);

		return horario;
	},
	verificarTurma : function (codigoTurma){
		var horarioDaoVar = new horarioDao();
		var res = horarioDaoVar.verificarTurma(codigoTurma);
		
		return res;
	},
	resetar: function(){
		alert("Sua turma não foi encontrada!");
		location.href = "cursos.html";
	}
};