"use script"

let card = document.querySelector(".rating-box");
let cardBtn = document.querySelector(".rating-font__btn");
let cardNums = document.querySelector('.rating-font__num').querySelectorAll('button');
let selectNum = document.querySelector(".select-num");
let num = '';

cardNums.forEach((btn) => {
	btn.addEventListener('click', (e) => {
		cardNums.forEach(btn => { btn.classList.remove('active') });
		btn.classList.add('active');

		num = btn.innerHTML;
	});
});
cardBtn.addEventListener('click', () => {
	card.classList.toggle("move");
	selectNum.innerHTML = num;
})