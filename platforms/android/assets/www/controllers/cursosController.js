var controller = {
	setCurso : function(codigoCurso) {
		if (codigoCurso != null) {
			location.href = "semestres.html?" + codigoCurso;
		} else {
			alert("Ops. Ocorreu um erro, vamos tentar de novo!");
			location.href = "cursos.html";
		}
	},
	getCursos : function() {

		var cursos = new cursosDao();
		resultado = cursos.getCursos();

		return resultado;

	}

}