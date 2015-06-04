// Objeto controller para guardar as funções necessárias.
var controller = {

    // Obtendo o curso selecionado pelo usuário.
    setNomeCurso: function (curso) {
        if (curso != null) {
            location.href = "semestres.html?" + curso;
        } else {
            alert("Ops. Ocorreu um erro, vamos tentar de novo!");
            location.href = "cursos.html";
        }
    },

    // Obtendo todos os cursos para serem exibidas na tela.
    getCursos: function (onDone) {
    	
        loadDependence("Dao/cursosDao.js", function(){
        	var resultado = [];
            var cursos = new cursosDao();
            cursos.getCursos(function(resultado){
            	if (resultado.length > 0) {
            		onDone(resultado);
                } else {
                    onDone(null);
                }
            });
        });

    }

};
