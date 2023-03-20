const suit_dict = {'s': '\u2660', 'd': '\u2666', 'c': '\u2663', 'h': '\u2665'}
const color_dict = {'s': 'black', 'd': 'blue', 'c': 'green', 'h': 'red'}

class Card {
  constructor(suit, value, card_id, parent_id, face="up") {
    this.suit = suit;
    this.value = value;
    this.card_id = card_id;
    this.parent_id = parent_id;
    this.face = face;

    const parent_element = document.getElementById(this.parent_id);
    
    const card = document.createElement("div");
    card.setAttribute("id", card_id);
    card.setAttribute("class", "card");
    card.setAttribute("style", "--suit_color: " + color_dict[this.suit])
    this.card = card;
    
    const main_suit = document.createElement("div");
    main_suit.setAttribute("class", "main_suit");
    main_suit.innerHTML = suit_dict[this.suit]
    this.main_suit = main_suit;
    
    const left_suit = document.createElement("div");
    left_suit.setAttribute("class", "left_suit");
    left_suit.innerHTML = value + "<br>" + suit_dict[this.suit]
    this.left_suit = left_suit;
    
    const right_suit = document.createElement("div");
    right_suit.setAttribute("class", "right_suit");
    right_suit.innerHTML = value + "<br>" + suit_dict[this.suit]
    this.right_suit = right_suit;
    
    this.card.appendChild(this.main_suit)
    this.card.appendChild(this.right_suit)
    this.card.appendChild(this.left_suit)
    
    parent_element.appendChild(card)
    
    // this.face_up()
    // this.face_down()
   
    
  }
    
  face_down() {
    this.card.setAttribute("class", "backside");
    this.main_suit.style.visibility = "hidden";
    this.left_suit.style.visibility = "hidden";
    this.right_suit.style.visibility = "hidden";
  }
  
  face_up() {
    this.card.setAttribute("class", "card");
    this.main_suit.style.visibility = "visible";
    this.left_suit.style.visibility = "visible";
    this.right_suit.style.visibility = "visible";
  }
    
}
		



