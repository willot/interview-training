function checkPal (element){
	var numberLetter = element.lenght;
	var reverse = -1;
	if (numberLetter%2 == 0){
		for (i=0; i<numberLetter/2 ; i++)
			var first = element.charAt(i);
			var last = element.charAt(reverse);
			reverse -1;
			if (first =! last){
				return false;		
			};			
		};
	else {
		for (i=0; i<(numberLetter/2)-1 ; i++)
			var first = element.charAt(i);
			var last = element.charAt(reverse);
			reverse -1;
			if (first =! last){
				return false;		
			};			
		};
	} 	

};