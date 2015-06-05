/*******************************************************************************
 * Carrega dependencias (import) do .js necessário.
 * 
 * Ex: Se no arquivo1.js existe alguma função que precisa ser usada no
 * arquivo2.js, basta chamar essa função da seguinte forma:
 * 
 * Arquivo1.js
 * 
 * function Script1() {
 * 		this.DigaOla = function() {
 * 			 alert("Sou do script 1");
 * 		 }
 *  };
 * 
 * 
 * Arquivo2.js
 * 
 * $(document).ready(function() {
 * 		loadDependence("Arquivo1.js", function() { 
 * 			var s = new Script1();
 * 			s.DigaOla();
 * 		 });
 *  });
 * 
 ******************************************************************************/

function loadDependence(url, callback) {
	// Obtendo tag head do HTML que está executando.
	var head = document.getElementsByTagName('head')[0];
	
	// Criando uma nova tag script.
	var script = document.createElement('script');
	
	// Criando atributos para a tag script criada anteriormente.
	script.type = 'text/javascript';
	script.src = url;
	
	// Ao ser carregada a função enviada pelo arquivo que está chamando
	// é executada.
	script.onreadystatechange = callback;
	script.onload = callback;
	
	// Adicionando tag script dentro da tag head.
	head.appendChild(script);
}