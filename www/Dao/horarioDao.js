function horarioDao() {
	this.getHorario = function(codigo, dia) {

		$.ajaxSetup({
			async : false,
			cache : false
		});

		var itens = [];

		$.getJSON(baseURL + "/ObterHorario?codTurma=" + codigo + "&dia=" + dia,
				function(data) {

					$.each(data, function(key, val) {
						itens.push({
							"CodigoTurma" : val.CodigoTurma,
							"Semestre" : val.Semestre,
							"Dia" : val.Dia,
							"Ordem" : val.Ordem,
							"DisciplinaCodigo" : val.DisciplinaCodigo,
							"DisciplinaNome" : val.DisciplinaNome,
							"ProfessorId" : val.ProfessorId,
							"ProfessorNome" : val.ProfessorNome
						});

					});

				});

		return itens;
	}
	this.verificarTurma = function(codigo) {
		
		$.ajaxSetup({
			async : false,
			cache : false
		});

		var res = "";

		$.getJSON(baseURL + "/VerificarTurma?codTurma=" + codigo, function(data) {
			res = data;
		});

		return res;
	}
}