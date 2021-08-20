let foodBtn = document.getElementById('foodBtn')
let newRest = document.getElementById('imgHolder')
let restName = document.getElementById('restName')
let restaurants = ['https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395__480.jpg','https://cdn.pixabay.com/photo/2017/06/29/20/09/mexican-2456038__480.jpg','https://cdn.pixabay.com/photo/2017/09/16/19/21/salad-2756467__480.jpg','https://cdn.pixabay.com/photo/2016/11/18/15/31/cooking-1835369_1280.jpg']

let restaurantNames =['Pier 49','La Casita','Gingers Garden Cafe','T-Bone']
function restaurantPicker(){
  let x = Math.floor(Math.random()*4) 
  restName.textContent = `${restaurantNames[x]}`
  imgHolder.style.backgroundImage = `url(${restaurants[x]})`
}

foodBtn.addEventListener('click',restaurantPicker)