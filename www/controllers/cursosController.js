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
    getCursos: function () {
        
    	var cursos = new cursosDao();
    	resultado = cursos.getCursos();
    	
    	if(resultado.length > 0){
    		return resultado;
    	} else {
    		return null;
    	}
    }

}