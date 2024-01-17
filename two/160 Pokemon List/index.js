


axios.get('https://api.vschool.io/pokemon') //load api site
    .then(response => { //after axios, response
            const list = response.data.objects[0].pokemon //set variable, pokemon is an element of object
            for (let i = 0; i < list.length; i++) { //go thru all pokemon elements 
                displayPokemon(list[i].name); //at every pokemon.name func starts
                        }console.log(list) //log all pokemon of object to console
                    })
                .catch(error => console.log(error)); //log errors to console
function displayPokemon(name) { //func of a pokemon.name
    const h1 = document.createElement('h1'); //element created
    h1.textContent = name// html created for pokemon.name 
    document.body.appendChild(h1); //attatch this new html to body
}