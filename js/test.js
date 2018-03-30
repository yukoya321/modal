(function () {
	'use strict'

	const modal = document.getElementById('modal'),
		modalItem = document.getElementsByClassName('modal_item'),
		btn = document.getElementsByClassName('btn'),
		close = document.getElementsByClassName('close'),
		closeImg = document.getElementsByClassName('close_img'),
		duration = 300,
		innerHeight = window.innerHeight,
		innerWidth = window.innerWidth,
		modalStyle = modal.style,
		easingLiner = (t, b, c, d) => {
			return c * t / d + b;
		};

	for (let i = 0; i < btn.length; i++) {
		const modalItemStyle = modalItem[i].style;


		const openFn = () => {
				const start = new Date() * 1,
					open = () =>{
						let current = new Date - start,
							modalOpacity = easingLiner(current, 0, 0.6, duration),
							modalItemOpacity = easingLiner(current, 0, 1, duration);

						modalStyle.opacity = modalOpacity;
						modalItemStyle.opacity = modalItemOpacity;

						if (current >= duration) {
							clearInterval(openModal);
							modalStyle.opacity = '0.6';
							modalItemStyle.opacity = '1';
						}
					}, 
			openModal = setInterval(open,16);
				modalStyle.display = 'block';
				modalItemStyle.display = 'block';
			},
			closeFn = () => {
				const start = new Date() * 1,
					close = () =>{
						let current = new Date - start,
							modalOpacity = easingLiner(current, 0, 0.6, duration),
							modalItemOpacity = easingLiner(current, 0, 1, duration);

						modalStyle.opacity = 0.5 - modalOpacity;
						modalItemStyle.opacity = 1 - modalItemOpacity;

						if (current >= duration) {
							clearInterval(closeModal);
							modalStyle.opacity = '0';
							modalItemStyle.opacity = '0';
							modalStyle.display = 'none';
							modalItemStyle.display = 'none';
						}
					}, 
						closeModal = setInterval(close,16);
			};

		btn[i].addEventListener('click', openFn);

		close[i].addEventListener('click', closeFn);
		closeImg[i].addEventListener('click', closeFn);
		modal.addEventListener('click', closeFn);
	}



}());
