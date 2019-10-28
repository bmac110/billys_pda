require('minitest/autorun')
require('minitest/rg')
require_relative('../card_game.rb')
require_relative('../card.rb')

class CardGameTest < MiniTest::Test
  def setup()
    @card1 = Card.new("Diamond", 1)
    @card2 = Card.new("Diamond", 10)

    @cards = [@card1, @card2]
    @cardgame = CardGame.new("Snap")

  end

  def test_check_has_suit()
    assert_equal("Diamond", @card1.suit)
  end

  def test_check_for_ace()

    assert_equal(true, @cardgame.check_for_ace(@card1))
  end

  def test_highest_card()
    assert_equal(@card2, @cardgame.highest_card(@card1, @card2))

  end
  #
  def test_cards_total()
    cards = [@card1, @card2]
    assert_equal("You have a total of 11", @cardgame.cards_total(cards))
  end

end
