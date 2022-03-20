import pets from "./pets"
import popUp from "./pop-up"

const prev = document.querySelector('.slider__btn--prev')
const next = document.querySelector('.slider__btn--next')
const sliderContent = document.querySelector('.slider__content')
// const sliderContentOurPets = document.querySelector('.slider__content--light')
let initPets = []
let numbPets 
const countPets = ()=>{
  const windowWidth = document.documentElement.clientWidth
  numbPets = (windowWidth > 768) ? 3 : (windowWidth>320) ? 2 : 1;
}
const addPets = (pets)=>{
  for (let i = 1; i<=numbPets;i++){
    let name
    do{
      const random = Math.round(0.4 + Math.random() * (pets.length-1));
      name = pets[random].name
    }
    while (initPets.includes(name)) 
    
    initPets.unshift(name)
    initPets.length = numbPets*2
  }
}
const drawCards = ()=>{
  clearSliderContent()
  const card = initPets.forEach((petName,ind )=>{
    if (ind >= numbPets) return
    const petCard = document.createElement('div')
    petCard.id = petName
    petCard.addEventListener('click', popUp)
      petCard.className = 'slider__card'
    const petObj = pets.find(el=>el.name == petName);
    const img = document.createElement('img')
      img.src = `./images/pets/pets-${petName}.png`
    const name = document.createElement('h4')
      name.textContent = petName
    const button = document.createElement('button')
      button.textContent = 'Learn more'
      button.className = 'button button--light'
    petCard.append(img,name,button)
    sliderContent.append(petCard)
    // sliderContentOurPets.append(petCard)
  })
}
const clearSliderContent = ()=>{
  while (sliderContent.firstChild) {
    sliderContent.removeChild(sliderContent.firstChild);
  }
}
const sliderPrev = ()=>{
addPets(pets)
drawCards()
}
const sliderNext = ()=>{
  addPets(pets)
  drawCards()
}
function slider(){
  countPets()
  addPets(pets)
  drawCards()
  prev.addEventListener('click', sliderPrev)
  next.addEventListener('click', sliderNext)
}
// sliderContentOurPets.textContent = 'qweqweqwe'
// const drawSliderOurPets = ()=>{
//   const card = initPets.forEach((petName,ind )=>{
//     const petCard = document.createElement('div')
//     petCard.id = petName
//     petCard.addEventListener('click', popUp)
//       petCard.className = 'slider__card'
//     const petObj = pets.find(el=>el.name == petName);
//     const img = document.createElement('img')
//       img.src = `./images/pets/pets-${petName}.png`
//     const name = document.createElement('h4')
//       name.textContent = petName
//     const button = document.createElement('button')
//       button.textContent = 'Learn more'
//       button.className = 'button button--light'
//     petCard.append(img,name,button)
//     sliderContentOurPets.append(petCard)
//   })
// }

// drawSliderOurPets()
window.addEventListener('resize',slider)
export default slider
