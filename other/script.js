const colors = ['#FF5722', '#FFEB3B', '#4CAF50', '#03A9F4', '#9C27B0'];

const colorBtn = document.querySelector('#color-btn');
const content = document.querySelector('.content');

colorBtn.addEventListener('click', () => {
	const randomColor = colors[Math.floor(Math.random() * colors.length)];
	content.style.backgroundColor = randomColor;
});