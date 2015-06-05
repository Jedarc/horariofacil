var url = window.location.search.replace("?", "");
var itens = url.split("&");

if (itens.length > 1) {
	alert("Ops... Algo deu errado,\nVamos tentar de novo!");
	location.href = "cursos.html";
}

var curso = window.decodeURIComponent(itens[0]);

var controller = {
	getNomeCurso : function() {
		return curso;
	},
	voltar: function(){
		location.href = "cursos.html";
	},
	getSemestres: function(){
		var semestres = new semestresDao();
		resultado = semestres.getSemestre(curso);
		
		if(resultado.length > 0){
    		return resultado;
    	} else {
    		return null;
    	}
	},
	setPeriodos: function(semestre){
		alert(semestre);
	}
};
