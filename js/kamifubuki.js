tsParticles.load("tsparticles",{
	"autoPlay": true,
	"fpsLimit": 45,
	"detectRetina": true,
	"pauseOnBlur": true,
	"fullScreen": {
		"zIndex": 1
	},
	"particles":{
		"number":{
			"value": 40,
			"density": {
				"enable": true,
				"area": 1600
			}
		},
		"shape":{
			"type":"image",
			"image": {
				"src": "https://syarstar.net/img/star.png",
				"width": 100,
				"height": 100,
				"replaceColor": false
			}
		},
		"size":{
			"value": {
				"min": 12,
				"max": 25
			}
		},
		"move":{
			"direction":"bottom",
			"enable":true,
			"outModes": {
				"default": "out"
			},
			"speed":{
				"min": 1,
				"max": 2
			},
			"random":true,
			"straight":false
		},
		"opacity":{
			"value": {
				"min": 0.25,
				"max": 1
			}
		},
		"rotate": {
			"value": {
				"min": 0,
				"max": 360
			},
			"direction": "random",
			"move": true,
			"animation": {
				"enable": true,
				"speed": {
					"min": 15,
					"max": 30
				}
			}
		}
	}
});
