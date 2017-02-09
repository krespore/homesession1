module.exports = function(list){
	if (list.length == 0) return 0;

	var initialValue = list[0];
	var difference = 0;
	var aritProgression = false;
	var geoProgression = false;

	for (var i = 1; i < list.length - 1; i++){
		if ((list[i+1] - list[i]) == (list[i] - list[i - 1])){
			aritProgression = true;
		}else{
			aritProgression = false;
		}

		if ((list[i+1] / list[i]) == (list[i] / list[i - 1])){
			geoProgression = true;
		}else{
			geoProgression = false;
		}
	}

	if (aritProgression) return "Arithmetic";
	if (geoProgression) return "Geometric";

	return -1;
}