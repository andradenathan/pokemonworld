var pokemon;
var name;

var x = new Object();

// Creating a request 
function getAllPokemon(){
    let apiURL = 'https://pokeapi.co/api/v2/pokemon?limit=10';
    fetch(apiURL)
    .then(response => response.json())
    .then(function(pokeData){
    console.log(pokeData)
    pokemon = pokeData;
    })
  }

function returnPokemon(){
    var x = document.getElementById("pokemon").value
    switch(x){
        case 'bulbasaur':
            console.log(pokemon.results[0])
            x = pokemon.results[0]
        break;
        case 'ivysaur':
            console.log(pokemon.results[1])
        break;
        case 'venusaur':
            console.log(pokemon.results[2])
        break;
        case 'charmander':
            console.log(pokemon.results[3])
        break;
        case 'charmeleon':
            console.log(pokemon.results[4])
        break;
        case 'charizard':
            console.log(pokemon.results[5])
        break;
        case 'squirtle':
            console.log(pokemon.results[6])
        break;
        case 'wartortle':
            console.log(pokemon.results[7])
        break;
        case 'blastoise':
            console.log(pokemon.results[8])
        break;
    }
}

function greetNewUser(){
    name = prompt("Enter your name as Pokemon trainer: ");
}

window.onload = function(){
    document.getElementById('welcome').innerText = "Welcome to my Pokemon World, " + name + "!";
}

getAllPokemon()
greetNewUser()






