const showimg = document.getElementById('lightgallery');
const lgstart = lightGallery(showimg, {
	plugins: [lgZoom],
	loop: false,
	mousewheel: true,
	preload: 0,
	speed: 500,
	startAnimationDuration: 500,
	showBarsAfter: 0,
	hideBarsDelay: 5000,
	selector: '.I_active'
});
// 初回起動
$(document).ready(function(){
	lgstart.refresh();
});