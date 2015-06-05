var url = window.location.search.replace("?", "");
var itens = url.split("&");

if (itens.length > 1) {
	alert("Ops... Algo deu errado,\nVamos tentar de novo!");
	location.href = "cursos.html";
}

var controller = {
	getNomeCurso : function() {
		return window.decodeURIComponent(itens[0]);
	},
	voltar: function(){
		location.href = "cursos.html";
	}
};
