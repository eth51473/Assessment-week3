console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Your form was submitted successfully, Thank You!")
}
function compliment(){
	alert("You're so cool!")
}
let catPic = document.querySelector("img")
catPic.addEventListener('mouseover',compliment)

let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);