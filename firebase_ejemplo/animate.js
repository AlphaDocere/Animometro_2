const cards = document.querySelectorAll('.cards');

const moveCard = document.getElementById('move-card') 

let indexCartas = 0 

const setClasses = () => {
    const classes = ['left', 'active', 'right'];
    cards.forEach((card, index) => card.classList.add(classes[index]))
}


const changePositions = (e) => {
    const clickedCard = e.currentTarget
    const activeCard = document.querySelector('.cards.active')
  //  if(clickedCard.classList.contains('active')) return;
    const classesFrom = e.currentTarget.className
    const classesTo = activeCard.className
    clickedCard.className = classesTo
    activeCard.className = classesFrom

    if(classesFrom == 'cards left')
    {
        if(indexCartas <= 0)
        {
            indexCartas = 0
        }else
        {
            indexCartas = indexCartas  - 1 
      
        }
    }else if(classesFrom == 'cards right')
    {
        indexCartas = indexCartas  + 1 

    }else
    {

        indexCartas= indexCartas * 3.14 
    }
    console.log('SE MOVIO LA CARTA' + classesTo + ' DESDE ' + classesFrom)
 
    moveCard.innerHTML =  Math.floor(indexCartas)
   
}

cards.forEach((card) => {
    card
        .addEventListener('click', changePositions)
})

setClasses();