let inputD = document.querySelector('.maqola_input')
let cards = document.querySelectorAll('.cardik')

inputD.addEventListener('input', () => {
	const inputValue = inputD.value.toLowerCase()

	cards.forEach(function (card) {
		let cardText = card.childNodes[3].firstElementChild.innerText.toLowerCase()
		if (cardText.indexOf(inputValue) > -1) {
			card.style.display = ''
		} else {
			card.style.display = 'none'
		}
	})
})
