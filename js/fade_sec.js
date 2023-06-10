function fadeAnime(){
	$('.FTrigger').each(function(){
		var usedevice = 0;
		if (window.matchMedia('(min-width: 600px)').matches){
			usedevice++;
		}
		if (window.matchMedia('(min-width: 1025px)').matches){
			usedevice++;
		}
		var elemPos = $(this).offset().top + 33 * (usedevice + 1);
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
			$(this).addClass('fade_sec');
		}
	});
}
// 読み込まれたら表示
$(function() {
	var fprogressTimer = setInterval(updatefProgress, 1000 / 60);
	function updatefProgress () {
		if($('.progress_complete').length){
			clearInterval(fprogressTimer);
			fadeAnime();
			window.addEventListener("scroll", function() {
				fadeAnime();
			});
			window.addEventListener("resize", function() {
				fadeAnime();
			});
		}
	}
});