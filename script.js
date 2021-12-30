var quotes = ['Such short little lives our pets have to spend with us, and they spend most of it waiting for us to come home each day. -Josh Grogan', 'Dogs are our link to paradise. - Milan Kundera', 'No matter how little money and how few possessions you own, having a dog makes you rich. – Louis Sabin', 'Be the person your dog thinks you are. – C.J. Frick', 'Petting, scratching, and cuddling a dog could be as soothing to the mind and heart as deep meditation, and almost as good for the soul as prayer. – Dean Koontz', 'A dog is the only thing on earth that loves you more than he loves himself. - Josh Billings', 'The greatest pleasure of a dog is that you may make a fool of yourself with him, and not only will he not scold you, but he will make a fool of himself, too. - Samuel Butler', 'I have found that when you are deeply troubled, there are things you get from the silent devoted companionship of a dog that you can get from no other source. - Doris Day', 'I\'ve seen a long in dogs\' eyes, a quickly vanishing look of amazed contempt, and I am convinced that basically dogs think humans are nuts. - John Steinbeck', 'Dogs do speak, but only to those who know how to listen. -Orhan Pamuk', 'When an eighty-five-pound mammal licks your tears away, then tries to sit on your lap, it\’s hard to feel sad. -Kristan Higgins', 'Dogs come into our lives to teach us about love. They depart to teach us about loss. A new dog never replaces an old dog, it merely expands the heart. -Erica Jong'
];
function quoteGen() {
  alert(quotes[Math.floor(Math.random()*11)]);
}

function greeting() {
  var name = prompt("What is your dog's name?");
  alert("Hi " + name + " Welcome aboard!");
}