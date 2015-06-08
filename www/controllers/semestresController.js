var url = window.location.search.replace("?", "");
var itens = url.split("&");

if (itens.length > 1) {
	alert("Ops... Algo deu errado,\nVamos tentar de novo!");
	location.href = "cursos.html";
}

var codigo = window.decodeURIComponent(itens[0]);

var controller = {
	getCurso : function() {
		var cursoDao = new semestresDao();
		curso = cursoDao.getCurso(codigo)
		
		return curso.Nome;
	},
	voltar: function(){
		location.href = "cursos.html";
	},
	getSemestres: function(){
		return curso.qtdSemestre;
	},
	setPeriodos: function(semestre){
		if (semestre != null) {
			location.href = "turmas.html?" + semestre + "&" + curso.Codigo + "&" + curso.Nome;
		} else {
			alert("Ops. Ocorreu um erro, vamos tentar de novo!");
			location.href = "cursos.html";
		}
	}
};
