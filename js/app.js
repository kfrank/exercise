// Using Vanilla JS because Jquery is too large to load for this
document.addEventListener('DOMContentLoaded', function() {

// Add Class of 'faved' when card is clicked
var card = document.querySelectorAll('.c');

// Listen for click on one card
function favEvent(){
	card[i].addEventListener('click', function(){
		var clicked = this;
		clicked.classList.add('c--faved'); // Add class
		setTimeout(function(){
			clicked.classList.remove('c--faved'); // Remove class
		}, 500);
		clicked.querySelector('[data-counter]').dataset.counter ++; // Increment fav counter
	});
}

// Apply to all cards
for ( i=0; i < card.length; i++ ) {
	favEvent();
}

}, false);