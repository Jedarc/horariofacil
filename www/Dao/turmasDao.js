function turmasDao() {
	this.getTurmas = function(semestre, curso) {

		$.ajaxSetup({
			async : false
		});

		var itens = [];

		$.getJSON(("http://horariofacil.azurewebsites.net/Mobile/ObterTurmas?codigoTurma="	+ curso + "&semestre=" + semestre).toString(), function(data) {

			$.each(data, function(key, val) {
				itens.push({
					"Codigo" : val.Codigo
				});

			});

		});

		return itens;
	}
}