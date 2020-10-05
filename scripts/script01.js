var pokemon;
var pokemonInfo;
var pokemon_images;
var id = 0;
var x = new Object();

function returnHome(){
  window.location.replace('/Users/USUÁRIO/Documents/pokemonworld/index.html')
}

// Creating a request 
function getAllPokemon(){
    let apiURL = 'https://pokeapi.co/api/v2/pokemon?limit=100';
    fetch(apiURL)
    .then(response => response.json())
    .then(function(pokeData){
    console.log(pokeData)
    for(let j = 0; j < pokeData.results.length; j++){ 
      for(let i = 0; i < pokeData.results.length; i++){
            if(localStorage.getItem('pokemon ' + j) == pokeData.results[i].name){
                showOnePokemon(pokeData.results[i].url);
                getPokemonImage(i + 1);
                var newdiv = document.createElement('div')
                var pokemonImages = document.getElementById("who_is_this_pokemon").src = pokemon_images;
                var pokemonNames = document.getElementById('newPokeName').innerText = pokeData.results[i].name;
            }
        }
      }
    })
  }

  function showOnePokemon(apiURL){
    fetch(apiURL)
    .then(response => response.json())
    .then(function(pokeData){
    console.log(pokeData)
    pokemonInfo = pokeData
  })
}

function getPokemonImage(pokeId){
    let apiURL = 'https://pokeapi.co/api/v2/pokemon-form/' + pokeId + '/';
    fetch(apiURL)
    .then(response => response.json())
    .then(function(pokeData){
    console.log(pokeData)
    pokemon_images = pokeData.sprites.front_default;
    })
}

getAllPokemon()