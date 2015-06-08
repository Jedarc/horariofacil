var url = window.location.search.replace("?", "");
var itens = url.split("&");

var semestre = window.decodeURIComponent(itens[0]);
var codigoCurso = window.decodeURIComponent(itens[1]);
var cursoNome = window.decodeURIComponent(itens[2]);

var controller = {
	getTurmas : function() {
		var turmaDao = new turmasDao();

		turmas = turmaDao.getTurmas(semestre, codigoCurso);

		return turmas;
	},
	voltar: function(opt){
		if(opt == 'cursos'){
			location.href = "cursos.html";
		} else if(opt == 'semestres') {
			location.href = "semestres.html?" + codigoCurso;
		}
		
	},
};