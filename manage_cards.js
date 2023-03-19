function add_card(suit, value, card_id, parent_id) {
  // const suit_dict = {'s': '♠', 'd': '♦', 'c': '♣', 'h': '♥'}
  const suit_dict = {'s': '\u2660', 'd': '\u2666', 'c': '\u2663', 'h': '\u2665'}
  const color_dict = {'s': 'black', 'd': 'blue', 'c': 'green', 'h': 'red'}
  const color = "green"
  const parent_element = document.getElementById(parent_id);
  parent_element.innerHTML='registered'
  
  const card = document.createElement("div");
  card.setAttribute("id", card_id);
  card.setAttribute("class", "card");
  card.setAttribute("style", "--suit_color: " + color_dict[suit])
  
  main_suit = document.createElement("div");
  main_suit.setAttribute("class", "main_suit");
  main_suit.innerHTML = suit_dict[suit]
  
  left_suit = document.createElement("div");
  left_suit.setAttribute("class", "left_suit");
  left_suit.innerHTML = value + "<br>" + suit_dict[suit]
  
  right_suit = document.createElement("div");
  right_suit.setAttribute("class", "right_suit");
  right_suit.innerHTML = value + "<br>" + suit_dict[suit]
  
  card.appendChild(main_suit)
  card.appendChild(right_suit)
  card.appendChild(left_suit)
  parent_element.appendChild(card)
}




