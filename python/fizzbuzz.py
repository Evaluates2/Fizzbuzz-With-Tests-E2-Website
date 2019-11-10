def fizzbuzzified_word(index, word):

    if (index + 1) % 15 == 0:
        return 'fizzbuzz'

    if (index + 1) % 5 == 0:
        return 'buzz'
        
    if (index + 1) % 3 == 0:
        return 'fizz'

    return word

def fizzbuzzify(input_string):

    words = input_string.split()

    fizzbuzzified_words = [
        fizzbuzzified_word(i, x) for i, x in enumerate(words)
    ]

    return " ".join(fizzbuzzified_words)