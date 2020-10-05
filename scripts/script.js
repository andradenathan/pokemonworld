var pokemon;
var pokemonInfo;
var catch_pokemon;
var pokemon_images;
var id = 0;
var x = new Object();

// Creating a request 
function getAllPokemon(){
    let apiURL = 'https://pokeapi.co/api/v2/pokemon?limit=1000';
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
    document.getElementById('paragraph').innerHTML = '<h2>Your Pokemon information below</h2>';
    document.getElementById("who_is_this_pokemon").src = pokemon_images;
    document.getElementById('pokeName').innerText = pokemonInfo.species.name
    document.getElementById('pokeType').innerText = pokemonInfo.types[0].type.name
    if(pokemonInfo.types.length > 1){
        document.getElementById('pokeType2').innerText = pokemonInfo.types[1].type.name
    } else {
        document.getElementById('ability2').innerText = 'None';
    }
    document.getElementById('ability1').innerText = pokemonInfo.abilities[0].ability.name
    if(pokemonInfo.abilities.length > 1){
        document.getElementById('ability2').innerText = pokemonInfo.abilities[1].ability.name
    } else{
        document.getElementById('ability2').innerText = 'None';
    }
    document.getElementById('status1').innerText = pokemonInfo.stats[0].base_stat
    document.getElementById('status2').innerText = pokemonInfo.stats[1].base_stat
    document.getElementById('status3').innerText = pokemonInfo.stats[2].base_stat
    document.getElementById('status4').innerText = pokemonInfo.stats[3].base_stat
    document.getElementById('status5').innerText = pokemonInfo.stats[4].base_stat
    document.getElementById('status6').innerText = pokemonInfo.stats[5].base_stat
    document.getElementById('pokeWeight').innerText = pokemonInfo.weight
    id = pokemonInfo.id;
})
  }


 function returnPokemon(){
    var x = document.getElementById("pokemon").value
    for(let i = 0; i < pokemon.results.length; i++){
        if(x == pokemon.results[i].name){
            getPokemonImage(i + 1);
            console.log(pokemon.results[i])
            showOnePokemon(pokemon.results[i].url)
            catch_pokemon = pokemon.results[i].name  
        }
    }
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


//     var x = document.getElementById("pokemon").value
//     switch(x){
//         case 'bulbasaur':
//             console.log(pokemon.results[0])
//             showOnePokemon(pokemon.results[0].url)
//             document.getElementById("who_is_this_pokemon").src = "bulbasaur.png";
//             catch_pokemon = x;
//         break;
//         case 'ivysaur':
//             console.log(pokemon.results[1])
//             showOnePokemon(pokemon.results[1].url)
//             catch_pokemon = x;
//         break;
//         case 'venusaur':
//             console.log(pokemon.results[2])
//             showOnePokemon(pokemon.results[2].url)
//             catch_pokemon = x;
//         break;
//         case 'charmander':
//             console.log(pokemon.results[3])
//             showOnePokemon(pokemon.results[3].url)
//             catch_pokemon = x;
//         break;
//         case 'charmeleon':
//             console.log(pokemon.results[4])
//             showOnePokemon(pokemon.results[4].url)
//             catch_pokemon = x;
//         break;
//         case 'charizard':
//             console.log(pokemon.results[5])
//             showOnePokemon(pokemon.results[5].url)
//             catch_pokemon = x;
//         break;
//         case 'squirtle':
//             console.log(pokemon.results[6])
//             showOnePokemon(pokemon.results[6].url)
//             catch_pokemon = x;
//         break;
//         case 'wartortle':
//             console.log(pokemon.results[7])
//             showOnePokemon(pokemon.results[7].url)
//             catch_pokemon = x;
//         break;
//         case 'blastoise':
//             console.log(pokemon.results[8])
//             showOnePokemon(pokemon.results[8].url)
//             catch_pokemon = x;
//         break;
//         default:
//             alert('Sorry, your Pokémon does not exist');
//     }
// }


function greetNewUser(){
    name = prompt("Enter your name as Pokemon trainer: ");
}

window.onload = function(){
    document.getElementById('welcome').innerText = "Welcome to my Pokemon World, " + name + "!";
    if (name == 'null'){
        document.getElementById('welcome').innerText = "Welcome to my Pokemon World, " + "trainer" + "!";
    }
}

function catchPokemon(){
    var pokevalid = localStorage.getItem('pokemon ' + id);
        if(catch_pokemon != pokevalid){
            localStorage.setItem('pokemon ' + id, catch_pokemon)
            alert('You caught ' + pokemonInfo.species.name + "!")
        } else{
            alert('You already caught this Pokemon')
        }
}

function showMyPokemon(){
    window.location.replace('/Users/USUÁRIO/Documents/pokemonworld/pokemonlist.html')
}


getAllPokemon()
greetNewUser()






