var url = window.location.search.replace("?", "");
var itens = url.split("&");

var codigoTurma = window.decodeURIComponent(itens[0]);
var cursoNome = window.decodeURIComponent(itens[1]);
var semestre = window.decodeURIComponent(itens[2]);
var codigoCurso = window.decodeURIComponent(itens[3]);

var controller = {
	getHorario : function(dia) {

		if (dia == null) {
			var data = new Date();
			dia = data.getDay();
		}

		dia++;

		var horarioDaoVar = new horarioDao();
		var horario = horarioDaoVar.getHorario(codigoTurma, dia);

		return horario;
	},
	verificarTurma : function(codigoTurma) {
		var horarioDaoVar = new horarioDao();
		var res = horarioDaoVar.verificarTurma(codigoTurma);

		return res;
	},
	resetar : function() {
		alert("Sua turma não foi encontrada!");
		location.href = "cursos.html";
	},
	voltar : function(opt) {
		if (opt == 'cursos') {
			location.href = "cursos.html";
		} else if (opt == 'semestres') {
			location.href = "semestres.html?" + codigoCurso;
		} else if (opt == 'turmas') {
			location.href = "turmas.html?" + semestre + "&" + codigoCurso + "&"
					+ cursoNome;
		}
	},
	getCodigoTurma: function(){
		return codigoTurma;
	},
	montarDados : function() {
		if ((cursoNome == 'undefined') || (semestre == 'undefined') || (codigoCurso == 'undefined')) {

			var horarioDaoVar = new horarioDao();
			var horario = horarioDaoVar.getDadosTurma(codigoTurma);
			
			cursoNome = horario.cursoNome;
			semestre = horario.semestre;
			codigoCurso = horario.codCurso;
		}
		
		return codigoTurma;
	}
};