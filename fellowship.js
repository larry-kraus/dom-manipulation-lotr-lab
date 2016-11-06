console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');


// Part 1


function makeMiddleEarth() {
  // create a section tag with an id of middle-earth
  // inside, add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body

  var section = document.createElement('section');
  section.setAttribute = ("id", "middle-earth");
  body.appendChild(section);
  
  var article1 = document.createElement('article');
  section.appendChild(article1);

  var h11 = document.createElement('h1');
  h11.textContent = "The Shire";
  article1.appendChild(h11);

  var article2 = document.createElement('article');
  section.appendChild(article2);

  var h12 = document.createElement('h1');
  h12.textContent = "Rivendell";
  article2.appendChild(h12);

  var article3 = document.createElement('article');
  section.appendChild(article3);

  var h13 = document.createElement('h1');
  h13.textContent = "Mordor";
  article3.appendChild(h13);
}

makeMiddleEarth();


// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  // give each hobbit a class of hobbit

  var list = document.createElement('ul');
  var theShire = document.querySelector("article");
  for (var i = 0; i < hobbits.length; i++) {
    var hobbitList = document.createElement("li");
    hobbitList.textContent = hobbits[i];
    theShire.appendChild(hobbitList);
  }
  theShire.appendChild(list);
  
}
makeHobbits();

// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // add the ring as a child of Frodo
}
var ring = document.createElement("div");
ring.setAttribute("id", "the-ring");
ring.setAttribute("class", "magic-imbued-jewelry");

ring.addEventListener("click", nazgulScreech);
var frodo = document.querySelector("li");
frodo.appendChild(ring);

keepItSecretKeepItSafe();


// Part 4


function makeBuddies() {
  // create an aside tag
var asideTag = document.createElement("aside");

  // attach an unordered list of the 'buddies' in the aside
var buddiesList = document.createElement('ul');
for (var i = 0; i < buddies.length; i++) {
  var listOfBuddies = document.createElement('li');
  listOfBuddies.textContent = buddies[i];
  asideTag.appendChild(listOfBuddies);
}
console.log("sup dog");
  // insert your aside as a child element of rivendell
var rivendell = document.querySelectorAll('article')[1];
rivendell.appendChild(asideTag);

}
makeBuddies();
console.log("Part 4 is working!");

// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
}


// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
}


// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
}


// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
}


// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
}


// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}


// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}
