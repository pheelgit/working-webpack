import pets from "./pets.js"
  
const popUpContent = document.querySelector('.pop-up__content')
const popUpWindow = document.getElementById('pop-up')
const closeBtn = document.createElement('div')
  closeBtn.className = 'pop-up__close'

function popUp(){
  const pet = pets.find(pet => pet.name == this.id)

  const description = document.createElement('div')
    description.className = 'pop-up__description'
    description.innerHTML  = `
<div class="pop-up__title">
  <h3>${pet.name}</h3>
  <h4>${pet.type } - ${pet.breed }</h4>
</div>
<h5 class="pop-up__text">${pet.description }</h5>
<ul class="pop-up__list">
  <li><h5><span>Age:</span> ${pet.age }</h5></li>
  <li><h5><span>Inoculations:</span> ${pet.inoculations}</h5></li>
  <li><h5><span>Diseases:</span> ${pet.diseases}</h5></li>
  <li><h5><span>Parasites:</span> ${pet.parasites}</h5></li>
</ul>
  `
  if (document.documentElement.clientWidth >= 768) {
    const img = document.createElement('img')
      img.src = `./images/pets/pets-${pet.name}.png`
      popUpContent.append(img)
  }


  popUpWindow.addEventListener('click',closeListener)

  popUpContent.append(description,closeBtn)

  showPopUp()
}

const closeListener = (event)=>{
  ((event.target == popUpWindow )
    || (event.target == closeBtn)) ? hidePopUp() : undefined ;
}

const showPopUp = () => popUpWindow.classList.remove('pop-up--hide')

const hidePopUp = () => {
  popUpWindow.classList.add('pop-up--hide')
  while (popUpContent.firstChild) {
    popUpContent.removeChild(popUpContent.firstChild);
  }
  popUpWindow.removeEventListener('click', closeListener)
}


export default popUp