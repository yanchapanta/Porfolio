/* ********** ContactForm ********** */
((d) => {
	const $form = d.querySelector('.contact-form'),
		$loader = d.querySelector('.contact-form-loader'),
		$response = d.querySelector('.contact-form-response');

	$form.addEventListener('submit', (e) => {
		e.preventDefault();
		$loader.classList.remove('none');
		fetch('abcestrategia@gmail.com', {
			method: 'POST',
			body: new FormData(e.target)
		})
			.then((res) => (res.ok ? res.json() : Promise.reject(res)))
			.then((json) => {
				console.log(json);
				location.hash = '#gracias';
				$form.reset();
			})
			.catch((err) => {
				console.log(err);
				let message =
					err.statusText || 'Ocurrió un error al enviar, intenta nuevamente';
				$response.querySelector(
					'h3'
				).innerHTML = `Error ${err.status}: ${message}`;
			})
			.finally(() => {
				$loader.classList.add('none');
				setTimeout(() => {
					location.hash = '#close';
				}, 3000);
			});
	});
})(document);
/* ********** menu click ********** */

(() => {
	const menuA = document.querySelectorAll('.menu-nav a');
	menuA.forEach((element, indice, array) => {
		element.addEventListener('click', (e) => {
			array.forEach((item) => {
				console.log(item);
				item.classList.remove('menu-nav-a');
			});

			element.classList.add('menu-nav-a');
		});
	});
})();
