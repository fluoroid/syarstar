function fadeAnime(){
	$('.FTrigger').each(function(){
		var elemPos = $(this).offset().top+100;//要素より100px下
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
			$(this).addClass('fade');
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