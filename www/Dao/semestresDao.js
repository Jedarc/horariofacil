function semestresDao(){
	this.getSemestre = function(curso) {
		
		var semestres = [];
		
		semestres.push({
			"Value" : "1",
			"Name" : "1"
		});

		semestres.push({
			"Value" : "2",
			"Name" : "2"
		});
		
		semestres.push({
			"Value" : "3",
			"Name" : "3"
		});
		
		semestres.push({
			"Value" : "4",
			"Name" : "4"
		});
		
		return semestres;
	}
}