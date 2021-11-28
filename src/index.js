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

        console.log(data);

  /* <ul class="cards">
       <li class="card"> 
          <h2 class="card--title">Bulbasaur</h2>
          <img
                width="256"
                class="card--img"
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
          />
          <ul class="card--text">
               <li>HP: 45</li>
               <li>ATTACK: 49</li>
               <li>DEFENSE: 49</li>
               <li>SPECIAL-ATTACK: 65</li>
               <li>SPECIAL-DEFENSE: 65</li>
               <li>SPEED: 45</li>
          </ul>
       </li> 
     </ul> */


     const bodyEl = document.querySelector(`body`)
     const cardsListEl = document.createElement(`ul`)
     cardsListEl.setAttribute(`class`,`cards`)
     bodyEl.append(cardsListEl)

function createPokemon(pokemon){

  const cardEl = document.createElement(`li`)
  cardEl.setAttribute(`class`,`card`)
  
  const titleEl = document.createElement(`h2`)
  titleEl.setAttribute(`class`,`card--title`)
  titleEl.textContent = pokemon.name
  
  const imgEl = document.createElement(`img`)
  imgEl.setAttribute(`class`,`card--img`)
  imgEl.setAttribute(`width`,`256`)
  imgEl.setAttribute(`src`, `${pokemon.sprites.other[`official-artwork`].front_default}`)
  
  const statsEl = document.createElement(`ul`)
  statsEl.setAttribute(`class`,`card--text`)
  
     function createState(state){
          const stateEl = document.createElement(`li`)
          stateEl.setAttribute(`class`,`stat`)
          stateEl.textContent = `${state.stat.name.toUpperCase()}:${state.base_stat}`
          statsEl.append(stateEl)
     }
     for(const state of pokemon.stats){
          createState(state)
     }
  
  cardEl.append(titleEl, imgEl, statsEl)
  cardsListEl.append(cardEl)
}

for(const pokemon of pokemons){
     createPokemon(pokemon)
}









