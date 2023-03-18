function add_card(suit, value, card_id, parent_id) {
  const suit_dict = {'s': '♠', 'd': '♦', 'c': '♣', 'h': '♥'}
  const color = "green"
  const parent_element = document.getElementById(parent_id);
  const card = document.createElement("div");
  card.setAttribute("id", card_id);
  card.setAttribute("class", "card");
  card.setAttribute("style", "--suit_color: " + color)
  main_suit = document.createElement("div");
  main_suit.setAttribute("class", "main_suit");
  main_suit.innerHTML = suit_dict[suit]
  card.appendChild(main_suit)
}