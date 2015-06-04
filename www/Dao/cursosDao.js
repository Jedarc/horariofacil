function cursosDao() {
	this.getCursos = function() {

		var cursos = [];

		cursos.push({
			"Value" : "Anáse de Sistemas",
			"Name" : "Anáse de Sistemas"
		});
		
		cursos.push({
			"Value" : "Ciência da Computação",
			"Name" : "Ciência da Computação"
		});

		return cursos;
	}
}