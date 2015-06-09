function cursosDao() {
	this.getCursos = function() {

		$.ajaxSetup({
			async : false,
			cache : false
		});

		var items = [];

		getJson();
		
		function getJson() {
			$.getJSON(baseURL + "/ObterCursos/",
					function(data) {
						$.each(data, function(key, val) {
							items.push({
								"Codigo" : val.Codigo,
								"Nome" : val.Nome
							});

						});

					});
		}

		return items;
	}
}