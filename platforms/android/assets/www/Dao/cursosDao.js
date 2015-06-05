function cursosDao() {
	this.getCursos = function() {

		var cursos = [];

		var resultado = new Object();

		/*
		$.ajax({
			url : "http://localhost:10642/Mobile/ObterCursos",
			type : "GET",
			dataType : "jsonp",
			success : function(dados) {
				resultado = dados;
				alert("json sucess")
			},
			error : function(xhr, ajaxOptions, error) {
				alert("erro json: " + xhr.responseText)
			}
		});
		*/

		function posAjax() {
			alert("pos ajax " + resultado.length)
		}

		cursos.push({
			"Value" : "Anáse de Sistemas",
			"Name" : "Anáse de Sistemas"
		});

		cursos.push({
			"Value" : "Ciência da Computação",
			"Name" : "Ciência da Computação"
		});
		
		cursos.push({
			"Value" : "Redes",
			"Name" : "Redes"
		});
		
		cursos.push({
			"Value" : "Nutrição",
			"Name" : "Nutrição"
		});

		return cursos;
	}
}