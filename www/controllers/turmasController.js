// Objeto controller para guardar as funções necessárias.
var controller = {

    // Obtendo o nome da turma selecionado pelo usuário.
    setNomeTurma: function (turma) {
        if (turma != null) {
            location.href = "semestres.html?" + turma;
        } else {
            alert("Ops. Ocorreu um erro, vamos tentar de novo!");
            location.href = "turmas.html";
        }
    },

    // Obtendo todas as turmas para serem exibidas na tela.
    getTurmas: function () {
        function carregarTurmas() {
            var resultado = [];
            var turmas = new turmasDao();
            resultado = turmas.getTurmas();
            if (resultado.length > 0) {
                alert(resultado[0].Name);
            }
        }

        loadDependence("Dao/turmasDao.js", carregarTurmas);
    }

};
