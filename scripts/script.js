// Creating a request variable and assign an XML object to it
function getAllPokemon(){
    let apiURL = 'https://pokeapi.co/api/v2/pokemon?limit=151';
    fetch(apiURL)
    .then(response => response.json())
    .then(function(pokeData){
    console.log(pokeData)
    })
  }

function greetNewUser(){
    var name = prompt("Enter your name as Pokemon trainer: ")
    alert('Hello trainer ' + name);
}

greetNewUser()
getAllPokemon()

