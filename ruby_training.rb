# h2={ bineivgfnivb:'gvw', vjnbevij:'ve', fwf:'cwcd', wffw

# h2.keys.map.each{|x| x.to_s}.sort_by{|key| key.length}

def uniq_letter(word)
	letters = word.split('')
	x=1

	letters.each do |letter|
		let = letters[x..-1]
		x += 1
		if let.include?(letter)
			puts false
			return false
		end

	end
	puts true
end


uniq_letter("ecole")
uniq_letter('qwerty')

puts "aaaaa"

def uniq_letter_2(word)
	hashed_word={}
	splited_word=word.split("")

	splited_word.each do |letter|
		if hashed_word[letter]
			hashed_word[letter] += 1
		else
			hashed_word[letter] = 1
		end	
	end	

	# splited_word.each_with_index{ |letter, index| 	
	# 	hashed_word[letter] = index
	# 	}

	p hashed_word

end

uniq_letter_2('tesry')
uniq_letter_2('test')
uniq_letter_2('tesr32y')

def fibonacci (number)
	if number == 0 || number == 1
		return number
	else 
		fibonacci(number-1) + fibonacci(number-2)	
	end

end	

puts fibonacci(1)
puts fibonacci(0)
puts fibonacci(10)
# puts fibonacci(250)

def factorial(num)
	if num == 0
		return 1
	else
		num*factorial(num-1)
	end	
end	

puts factorial(0)
puts factorial(5)
puts factorial(1)
puts factorial(25)

def reverse_word(word)
	splitted_word = word.split("")
	word_length = splitted_word.length
	word_length = word_length -1
	word_reversed =[]

	until word_length < 0
		if splitted_word[word_length] != " "
		word_reversed << splitted_word[word_length]
		end
		word_length -=1

	end	
 	new_word = word_reversed.join

end	

# puts reverse_word('ecole')
# puts reverse_word('yewifhj')
# puts reverse_word('experiment')
puts reverse_word('exper iment')

def fizzbuuz(arr)
	answer = []
	arr.each do |num|
		if num%3 ==0 && num%5 ==0
			answer << 'fizzbuuz '
		elsif num%5 == 0
			answer << 'buzz '
		elsif num%3 ==0
			answer << 'fizz '
		else
			answer << num
		end
	
	end	
		p answer.join(',')
end

arr = (1..25).to_a
p arr
fizzbuuz(arr)