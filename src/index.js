 /* - Create a card using JS that represents a single pokemon, 
        use the example image as a reference. 
        You will also find an HTML example in the templates folder
   - Use the exact CSS classes you see in the example HTML 
        to obtain the same style for each card
   - The cards should be nested inside <section class="cards"></section>
   - Use the official-artwork object key as the images 
        for the card. The images are all inside of the sprites key, 
        in each pokemon object
   - Render all the cards on the page that represents 
        all the pokemons, recreating the same layout, using JS */

   
function createPokemon (pokemon){
          
          
    const container = document.querySelector(`.cards`)

    const liEl = document.createElement(`li`)
     liEl.setAttribute(`class`,`card`)

    container.append(liEl)

    const h2El = document.createElement(`h2`)
     h2El.setAttribute(`class`,`card--title`)
     h2El.textContent= pokemon.name.toUpperCase()

    const imgEl = document.createElement(`img`)
     imgEl.setAttribute(`class`,`card--img`)
     imgEl.setAttribute(`src`,`${pokemon.sprites.other['official-artwork'].front_default}`)
     imgEl.setAttribute(`style`,`width:256px`)

    const ulAttributeEl = document.createElement(`ul`)
     ulAttributeEl.setAttribute(`class`,`card--text`)

     liEl.append(h2El, imgEl, ulAttributeEl)

     for(statData of pokemon.stats){
          const attributeText = `${statData.stat.name.toUpperCase()}: ${statData.base_stat}`
          const liAttributeEl = document.createElement(`li`)
          liAttributeEl.textContent = attributeText
          ulAttributeEl.append(liAttributeEl)
     }
}

for (const pokemon of pokemons){
     createPokemon(pokemon)
}







