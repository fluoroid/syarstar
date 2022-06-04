$(function () {
	imagesProgress();
	function imagesProgress () {
		var container = $('#progress'),
		progressBar = container.find('.progress_bar'),
		progressText = container.find('.progress_text'),
		imgLoad = imagesLoaded('body'),
		imgTotal = imgLoad.images.length,
		imgLoaded = 0,
		current = 0,
		progressTimer = setInterval(updateProgress, 1000 / 60);
		imgLoad.on('progress', function () {
			imgLoaded++;
		});
		function updateProgress () {
			var target = (imgLoaded / imgTotal) * 100;
			current += (target - current) * 0.3;
			progressBar.css({ width: current + '%' });
			//progressText.text(Math.floor(current) + '%');
			if(current >= 100){
				clearInterval(progressTimer);
				container.addClass('progress_complete');
				progressText.animate({ opacity: 0 }, 250, function (){});
				progressBar.delay(500)
				.animate({ opacity: 0 }, 250, function (){});
			}
			if (current > 99.9) {
				current = 100;
			}
		}
	}
});