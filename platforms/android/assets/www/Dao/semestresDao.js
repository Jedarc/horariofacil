function semestresDao() {
	this.getCurso = function(codigo) {

		$.ajaxSetup({
			async : false,
			cache : false
		});

		var itens = [];

		$.getJSON(baseURL + "/ObterCursoPorId?id=" + codigo,
				function(data) {
					itens.push({
						"Codigo" : data.Codigo,
						"Nome" : data.Nome,
						"qtdSemestre" : data.qtdSemestre
					});

				});

		return itens[0];
	}
}