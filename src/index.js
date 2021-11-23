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


     const liEl = document.body.createElement(`li`)
     liEl.setAttribute(`class`,`card`)

     const h2El = document.createElement(`h2`)
     h2El.setAttribute(`class`,`card--title`)

     const imgEl = document.createElement(`img`)
     imgEl.setAttribute(`class`,`card--img`)

     const ulEl = document.createElement(`ul`)
     ulEl.setAttribute(`class`,`card--text`)

     liEl.append(h2El, imgEl, ulEl)
     
     const container = document.querySelector(`.cards`)
     container.append(liEl)
     
     const insideListElement1 = document.createElement(`li`)
     const insideListElement2 = document.createElement(`li`)
     const insideListElement3 = document.createElement(`li`)
     const insideListElement4 = document.createElement(`li`)
     const insideListElement5 = document.createElement(`li`)
     const insideListElement6 = document.createElement(`li`)
        
     ulEl.append(insideListElement1, insideListElement2, insideListElement3, insideListElement4, insideListElement5, insideListElement6)
        
     h2El.textContent = `Bulbasaur`
     imgEl.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png`
     insideListElement1.textContent = `HP: 45`
     insideListElement2.textContent = `ATTACK: 49`
     insideListElement3.textContent = `DEFENSE: 49`
     insideListElement4.textContent = `SPECIAL-ATTACK: 65`
     insideListElement5.textContent = `SPECIAL-DEFENSE: 65`
     insideListElement5.textContent = `SPEED: 45`


    




