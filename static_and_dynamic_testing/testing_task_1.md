### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby

class CardGame


  def checkforAce(card) #camelcase or underscore would increase readability
    if card.value = 1 # = should be == as = assign's a value to an object
      return true
    else
      return false
    end
  end

  dif highest_card(card1 card2) #spelling error (dif should be def) also need (,) between card1 and card2
  if card1.value > card2.value
    return card   #card should be card1
  else
    return card2
  end
end
end     #too many ends and improper use of indentation

def self.cards_total(cards) #cant call a method as definition
  total                     # total has not been assigned a value
  for card in cards
    total += card.value
    return "You have a total of" + total #convert integer to string
  end
end
#end of class should be here
