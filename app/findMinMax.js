module.exports =  function(list){
	min = list[0];
	max = list[0];

	for (var i = 0; i < list.length; i++){
		if (list[i] < min){
			min = list[i]
		}

		if (list[i] > max){
			max = list[i]
		}
	}
	if (min == max) return [min];
	return [min, max]
}