function cursosDao() {
	this.getCursos = function() {

		$.ajaxSetup({
			async : false
		});

		var items = [];
		
		$.getJSON("http://horariofacil.azurewebsites.net/Mobile/ObterCursos",
				function(data) {

					$.each(data, function(key, val) {
						items.push({
							"Value" : val.Codigo,
							"Name" : val.Nome
						});

					});

				});
		
		return items;
	}
}