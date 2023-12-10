function topshow () {
	var uchinoko = $('#uchinokop'), uchinoko2 = $('#uchinokop2'),aitsu = $('#aitsup'), text1 = $('#Btext1'), text2 = $('#Btext2');
	// animation
	uchinoko.delay(0).queue(function(next) {
		$(this).addClass('zoomIn');
		fuwafuwa();
		next();
	});
	uchinoko2.delay(500).queue(function(next) {
		$(this).addClass('zoomIn');
		fuwafuwa2();
		next();
	});
	text1.delay(1000).queue(function(next) {
		$(this).addClass('blur');
		next();
	});
	text2.delay(1000).queue(function(next) {
		$(this).addClass('blur');
		next();
	});
	aitsu.delay(1000).queue(function(next) {
		$(this).addClass('zoomIn');
		next();
	});
	uchinoko.delay(1200).queue(function(next) {
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

// ふわふわ
function fuwafuwa () {
	const fly = (uchinoko) => {
		const startTime = performance.now()
		const amplitude = { x: 5, y: 2.5, rotation: -1.5 }
		const speed = { x: 0.0002, y: 0.0005 }
		const tick = () => {
			const diff = performance.now() - startTime
			const x = amplitude.x * Math.sin(speed.x * diff)
			const y = amplitude.y * Math.sin(speed.y * diff)
			const rotation = amplitude.rotation * (1 + Math.sin(speed.y * diff))
			uchinoko.style.transform = `rotate(${rotation}deg) translate(${x}%, ${y}%)`
			requestAnimationFrame(tick)
		}
		tick()
	}
	const uchinoko = document.querySelector('.uchinoko')
	if (uchinoko) {
		fly(uchinoko)
	}
}
function fuwafuwa2 () {
	const fly = (uchinoko2) => {
		const startTime = performance.now()
		const amplitude = { x: 5, y: 2.5, rotation: -3 }
		const speed = { x: 0.00015, y: 0.000375 }
		const tick = () => {
			const diff = performance.now() - startTime
			const x = amplitude.x * Math.sin(speed.x * diff)
			const y = amplitude.y * Math.sin(speed.y * diff)
			const rotation = amplitude.rotation * (1 + Math.sin(speed.y * diff))
			uchinoko2.style.transform = `rotate(${rotation}deg) translate(${x}%, ${y}%)`
			requestAnimationFrame(tick)
		}
		tick()
	}
	const uchinoko2 = document.querySelector('.uchinoko2')
	if (uchinoko2) {
		fly(uchinoko2)
	}
}