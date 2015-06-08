function semestresDao() {
	this.getCurso = function(codigo) {

		$.ajaxSetup({
			async : false
		});

		var itens = [];

		$.getJSON("http://horariofacil.azurewebsites.net/Mobile/ObterCursoPorId?id=" + codigo,
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