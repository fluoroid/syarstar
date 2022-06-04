function topshow () {
	var uchinoko = $('#uchinokop'), aitsu = $('#aitsup'), text1 = $('#Btext1'), text2 = $('#Btext2');
	// animation
	uchinoko.delay(0).queue(function(next) {
		$(this).addClass('zoomIn');
		next();
	});
	text1.delay(1250).queue(function(next) {
		$(this).addClass('blur');
		next();
	});
	text2.delay(1250).queue(function(next) {
		$(this).addClass('blur');
		next();
	});
	aitsu.delay(1250).queue(function(next) {
		$(this).addClass('zoomIn');
		next();
	});
}

// 読み込まれたら表示
$(function() {
	var tprogressTimer = setInterval(updatetProgress, 1000 / 60);
	function updatetProgress () {
		if($('.progress_complete').length){
			clearInterval(tprogressTimer);
			topshow();
		}
	}
});