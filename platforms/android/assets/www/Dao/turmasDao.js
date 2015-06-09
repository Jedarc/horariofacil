function turmasDao() {
	this.getTurmas = function(semestre, curso) {

		$.ajaxSetup({
			async : false,
			cache : false
		});

		var itens = [];

		$.getJSON((baseURL + "/ObterTurmas?codigoTurma="	+ curso + "&semestre=" + semestre).toString(), function(data) {

			$.each(data, function(key, val) {
				itens.push({
					"Codigo" : val.Codigo
				});

			});

		});

		return itens;
	}
}