var pokemon;
var pokemonInfo;
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

  function showOnePokemon(apiURL){
    fetch(apiURL)
    .then(response => response.json())
    .then(function(pokeData){
    console.log(pokeData)
    pokemonInfo = pokeData
    document.getElementById('pokeName').innerText = pokemonInfo.species.name
    document.getElementById('pokeType').innerText = pokemonInfo.types[0].type.name
    document.getElementById('ability1').innerText = pokemonInfo.abilities[0].ability.name
    document.getElementById('ability2').innerText = pokemonInfo.abilities[1].ability.name
    document.getElementById('status1').innerText = pokemonInfo.stats[0].base_stat
    document.getElementById('status2').innerText = pokemonInfo.stats[1].base_stat
    document.getElementById('status3').innerText = pokemonInfo.stats[2].base_stat
    document.getElementById('status4').innerText = pokemonInfo.stats[3].base_stat
    document.getElementById('status5').innerText = pokemonInfo.stats[4].base_stat
    document.getElementById('status6').innerText = pokemonInfo.stats[5].base_stat
    document.getElementById('pokeWeight').innerText = pokemonInfo.weight
})
  }


function returnPokemon(){
    var x = document.getElementById("pokemon").value
    switch(x){
        case 'bulbasaur':
            console.log(pokemon.results[0])
            showOnePokemon(pokemon.results[0].url)
        break;
        case 'ivysaur':
            console.log(pokemon.results[1])
            showOnePokemon(pokemon.results[1].url)
        break;
        case 'venusaur':
            console.log(pokemon.results[2])
            showOnePokemon(pokemon.results[2].url)
        break;
        case 'charmander':
            console.log(pokemon.results[3])
            showOnePokemon(pokemon.results[3].url)
        break;
        case 'charmeleon':
            console.log(pokemon.results[4])
            showOnePokemon(pokemon.results[4].url)
        break;
        case 'charizard':
            console.log(pokemon.results[5])
            showOnePokemon(pokemon.results[5].url)
        break;
        case 'squirtle':
            console.log(pokemon.results[6])
            showOnePokemon(pokemon.results[6].url)
        break;
        case 'wartortle':
            console.log(pokemon.results[7])
            showOnePokemon(pokemon.results[7].url)
        break;
        case 'blastoise':
            console.log(pokemon.results[8])
            showOnePokemon(pokemon.results[8].url)
        break;
    }
}

function greetNewUser(){
    name = prompt("Enter your name as Pokemon trainer: ");
}

window.onload = function(){
    document.getElementById('welcome').innerText = "Welcome to my Pokemon World, " + name + "!";
    if (name == 'null'){
        document.getElementById('welcome').innerText = "Welcome to my Pokemon World, " + "trainer" + "!";
    }
}



getAllPokemon()
greetNewUser()






