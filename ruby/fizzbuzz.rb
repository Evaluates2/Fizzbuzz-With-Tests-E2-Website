def fizzbuzz(inputString)
    words = (splitOnWhitespace inputString)
    words = words.map.with_index { |word, i| fizzbuzzifyWord(word, i) }
    return words.join(" ")
  end
  
  def splitOnWhitespace(inputString) 
    inputString.gsub(/\s+/m, ' ').strip.split(" ")
  end
  
  def fizzbuzzifyWord (word, i)
      if (i+1) % 15 == 0
      return "fizzbuzz"
    end 
      if (i+1) % 5 == 0
      return "buzz"
    end
      if (i+1) % 3 == 0
      return "fizz"
    end 
  
  word
  end