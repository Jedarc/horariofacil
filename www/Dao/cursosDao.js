function cursosDao() {
	this.getCursos = function() {

		var items = [];
		ajax();
		function ajax() {
			alert("chamou ajax!")
			$.getJSON(
					"http://horariofacil.azurewebsites.net/Mobile/ObterCursos",
					function(data) {

						$.each(data, function(key, val) {
							items.push({
								"Value" : val.Codigo,
								"Name" : val.Nome
							});
						});

					});

		}

		if (items > 0) {
			alert(items[0].Name);
			return items;
		} else {
			ajax();
		}
	}
}