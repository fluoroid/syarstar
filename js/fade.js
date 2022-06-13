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
// 絞り込み機能
$(function() {
	$("#lightgallery li").addClass("I_active");
});
$(document).on('click', '.sort-btn li', function(){
	// ボタンのクラス名
	$(".sort-btn .R_active").removeClass("R_active");
	$(this).addClass('R_active');
	// 各画像のクラス名
	var className = $(this).attr("class");
	className = className.split(' ');
	$("#lightgallery li").removeClass("I_active");
	$("#lightgallery li").removeClass("I_inactive");
	$("#lightgallery li").removeClass("fade");
	if(className[0] == "category0"){
		$("#lightgallery li").addClass("I_active");
	}else{
		$("#lightgallery li").addClass("I_inactive");
		$("#lightgallery li."+className[0]).removeClass("I_inactive");
		$("#lightgallery li."+className[0]).addClass("I_active");
	}
	// 絞り込み後に画像のフェード&表示画像更新
	fadeAnime();
	lgstart.refresh();
});