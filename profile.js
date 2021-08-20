let colorBtn = document.getElementById('color')
let placeBtn = document.getElementById('place')
let ritualBtn = document.getElementById('ritual')


function colorAlert(){
  alert('My favorite color is Blue')
}
function placeAlert(){
  alert(`My favorite place is the Philippines`)
}
function ritualAlert(){
  alert('My favorite ritual is making a sandwich for lunch everyday')
}


colorBtn.addEventListener('click',colorAlert)
placeBtn.addEventListener('click',placeAlert)
ritualBtn.addEventListener('click',ritualAlert)

