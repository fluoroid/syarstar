const showimg = document.getElementById('lightgallery');
const lgstart = lightGallery(showimg, {
	plugins: [lgZoom],
	allowMediaOverlap: true,
	loop: false,
	mousewheel: true,
	preload: 0,
	speed: 500,
	startAnimationDuration: 500,
	showBarsAfter: 0,
	hideBarsDelay: 5000,
	swipeThreshold: 1,
	selector: '.I_active',
	strings: {
		closeGallery: '閉じる',
		toggleMaximize: '最大化',
		previousSlide: '前へ',
		nextSlide: '次へ',
		download: 'ダウンロード',
		playVideo: '動画を再生',
		mediaLoadingFailed: '読み込みに失敗しました'
	},
	zoomPluginStrings: {
		zoomIn: '拡大',
		zoomOut: '縮小',
		viewActualSize: '実際のサイズ',
	}
});
// 初回起動
$(document).ready(function(){
	lgstart.refresh();
});