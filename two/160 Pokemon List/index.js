


axios.get('https://api.vschool.io/pokemon')


    .then(response => { 
       
        const pokemonList = response.data.objects[0].pokemon;
        console.log(pokemonList);
        for (let i = 0; i < pokemonList.length; i++) {
            displayPokemon(pokemonList[i])
        //     const h1 = document.createElement('h1'); 
        //     h1.textContent = pokemonList[i].name;   
        //     document.body.appendChild(h1);            
        }
    })
    .catch(error => console.log(error));

function displayPokemon(pokemon){
        const h1 = document.createElement('h1'); 
        h1.textContent = pokemon.name;  // Set the text content to the Pokemon's name
        document.body.appendChild(h1);  // Append the h1 element to the document body
    
}