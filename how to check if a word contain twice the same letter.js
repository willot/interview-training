
function uniqLetter (sentence){
	var letters = sentence.split('');
	var wordLength = letters.length;

	for (i=0; i <wordLength; i++){
		var testLetter = letters[i];
		var indexStart = i+1
		for ( u=indexStart; u<wordLength; u++){
			if (testLetter === letters[u]){
				return false;
			};
		};
	};
	return true;

}

uniqLetter("ecole");
uniqLetter('true');
uniqLetter('aaaa');
uniqLetter('ab');



function verifyIfUniqLetter (word){
	var arrayWord = word.split('').sort();
	console.log(arrayWord);
	var index = 0;
	for (i=1; i < arrayWord.length; i++){
		if (arrayWord[index] === arrayWord[i]){
			if (arrayWord[index] !== ' '){
				return false;
			}
		}
		index +=1;
	};
	return true;
}

verifyIfUniqLetter('ecole');
verifyIfUniqLetter('abcdefgh');
verifyIfUniqLetter('abcdeffff');
verifyIfUniqLetter('ab cd efgh');


function uniqLetterHash (word){
	var letters = word.toLowerCase();
	letters = letters.split('');
	var wordLength = letters.length;
	var hashedWrod = {};

	for (i=0; i <wordLength; i++){
		var testLetter = letters[i];

		if (testLetter === " "){
			hashedWrod[testLetter] += 1;
			console.log(hashedWrod);
		}
		
		else if (hashedWrod.hasOwnProperty(testLetter)){
			// hashedWrod[testLetter] += 1
			console.log(hashedWrod)
			return false
		}
		else{
			hashedWrod [testLetter] = 1;
		}

	}
	console.log(hashedWrod)
	return true
}

uniqLetterHash('true');
uniqLetterHash('ecole');
uniqLetterHash('Ecole');
uniqLetterHash('la voiture by');
uniqLetterHash('la ou ne');

function reverseWord(word){
	var arrayWord = word.split('');
	var reverseArray =[];
	var arrayLength = arrayWord.length;
	for (i=arrayLength; i>-1; i--){
		reverseArray.push(arrayWord[i]);
	};
	console.log(reverseArray.join(''));

}

reverseWord('ecole')


function countLetter (word){
	var letters = word.toLowerCase();
	letters = letters.split('');
	var wordLength = letters.length;
	var hashedWrod = {};
	var stringNew =[]


	for (i=0; i < wordLength; i++){
		var testLetter = letters[i];

	 	if (hashedWrod.hasOwnProperty(testLetter)){
			hashedWrod[testLetter] += 1
			// stringNew += testLetter;
			// stringNew += hashedWrod[testLetter];
		}
		else{
			hashedWrod [testLetter] = 1;
			stringNew.push(testLetter);
			// stringNew += hashedWrod[testLetter];
		}
	}
	console.log(stringNew);
	console.log(hashedWrod);

	var str=''
	for (u=0; u < stringNew.length; u++){
		var str2= stringNew[u]
		str += str2;
		str += hashedWrod[stringNew[u]];
	}
	console.log(str);
}

countLetter('ecole');

function compareWords (word1, word2){
	var firstWord = word1.split('').sort();
	var secondWord = word2.split('').sort();
	console.log(firstWord);
	console.log(secondWord);

	if (firstWord.length === secondWord.length){
		for(i=0; i<firstWord.length; i++){
			if (firstWord[i] !== secondWord[i]){
				return false;
			};	
		};
	}
	else{
		return false;
	};

	return true

};

compareWords('true', 'eutr');
compareWords('theuhiuoh', 'pwegfjp');
compareWords('ttyu', 'ttyx');





var myStack = [];

//push
myStack.push(1);
console.log(myStack);
myStack.push(2);
console.log(myStack);
myStack.push(3);
console.log(myStack);

//pop
myStack.pop(); 
console.log(myStack);
myStack.pop(); 
console.log(myStack);
myStack.pop();
console.log(myStack);

var myQueue = [];

//push
myQueue.push(1);
console.log(myQueue);
myQueue.push(2);
console.log(myQueue);
myQueue.push(3);
console.log(myQueue);

//pop
myQueue.shift();
console.log(myQueue);
myQueue.shift();
console.log(myQueue);
myQueue.shift();
console.log(myQueue);

function fizzbuzz(arr){
	var arrLength= arr.length;
	for (i=0; i<arrLength; i++){
		if (arr[i] % 3== 0 && arr[i] % 5==0){
			console.log('FizzBuzz')
		}
		else if( arr[i] % 5==0){
			console.log('Buzz')
		}
		else if( arr[i] % 3==0){
			console.log('Fizz')
		}
		else {
			console.log(arr[i])
		};
	};
};


var test =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
fizzbuzz(test);

// Not working properly fizz buzz!! 
function fizzbuzz(arr){
	var arrLength= arr.length;
	for (i=0; i<arrLength; i++){
		if 	( arr[i] % 5==0){
			console.log('Buzz')
		}
		else if (arr[i] % 3== 0 && arr[i] % 5==0){
			console.log('FizzBuzz')
		}

		else if( arr[i] % 3==0){
			console.log('Fizz')
		}
		else {
			console.log(arr[i])
		};
	};
};


var test =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
fizzbuzz(test);