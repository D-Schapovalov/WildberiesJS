const cartModal = function () {
	const cartBtn = document.querySelector('.button-cart'),
		cart = document.getElementById('modal-cart'),
		closeBtn = cart.querySelector('.modal-close');

	// cartBtn.addEventListener('click', function () {
	// 	cart.style.display = 'flex';
	// });

	// closeBtn.addEventListener('click', function () {
	// 	cart.style.display = '';
	// });
	// ================== мой вариант ======================
	cartBtn.addEventListener('click', function () {
		cart.classList.add('show');
	});
	closeBtn.addEventListener('click', function () {
		cart.classList.remove('show');
	});

}
cartModal();