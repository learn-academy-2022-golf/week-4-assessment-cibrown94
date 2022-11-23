# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'

def number num 
   if num % 2 == 0
    "#{num} is even"
   else
    "#{num} is odd"
end
    end
p number(num1)
p number(num2)
p number(num3)

# OUPUT:
# "7 is odd"
# "42 is even"
# "221 is odd"


# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'


def letters letter 
letter.delete("aeiouAEIOU")
end 
 
p letters(beatles_album1)
p letters(beatles_album2)
p letters(beatles_album3)

# OUTPUT:
# "Rbbr Sl"
# "Sgt Pppr"
# "bby Rd"


# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

# def words word
#  if word == word.reverse
#  return "#{word} is a palindrome"
#  else
#     puts "#{word} is NOT a palindrome"
# end
# end
# p words (palindrome_tester1)
# p words (palindrome_tester2)
# p words (palindrome_tester3)     

def words word  
    word_arr = word.downcase.gsub(/ /,'').split('')
     if word_arr == word_arr.reverse
        "#{word} is a palindrome"
    else
        "#{word} is NOT a palindrome"
 end
     end

p words (palindrome_tester1)
p words (palindrome_tester2)
p words (palindrome_tester3)   
    
# OUTPUT:
# "Racecar is a palindrome"
# "LEARN is NOT a palindrome"
# "Rotator is a palindrome"
