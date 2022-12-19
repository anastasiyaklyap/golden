const navigation = document.querySelector('.navigation');
const headetTitle = document.querySelector('.heading-primary');

window.addEventListener('scroll', () => {
	console.log(headetTitle.offsetTop - headetTitle.clientHeight);
	if (window.scrollY >= headetTitle.clientHeight - headetTitle.offsetTop) {
		navigation.classList.add('active');
	} else {
		navigation.classList.remove('active');
	}
});
