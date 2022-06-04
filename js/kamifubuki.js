particlesJS("particles-js",{
  "particles":{
    "number":{
      "value":40,//この数値を変更すると紙吹雪の数が増減できる
      "density":{
        "enable":false,
        "value_area":400
      }
    },
    "color": {
        "value": ["#EA5532", "#F6AD3C", "#FFF33F", "#86DE00", "#00A95F", "#00ADA9", "#00AFEC", "#0067EC","#4D4398", "#E85298"]//紙吹雪の色の数を増やすことが出来る
    },
    "shape":{
      "type":"image",//形状はpolygonを指定
      "stroke":{
        "width":0,
      },
      "polygon":{
        "nb_sides":5//多角形の角の数
      },
      "image": {
        "src": "https://syarstar.net/img/star.png",
        "width": 100,
        "height": 100
      }
    },
      "opacity":{
        "value":1,
        "random":false,
      },
      "size":{
        "value":25,
        "random":true,//サイズをランダムに
        "anim":{
          "enable":true,
          "speed":1.345709068776642,
          "size_min":12,
          "sync":false
        }
      },
      "rotate": {
        "value": 360,
        "random": true,
        "anim": {
          "enable": true,
          "speed": -10
        }
      },
      "opacity": {
        "value": 1,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.5,
          "sync": false
        }
      },
      "line_linked":{
        "enable":false,
      },
      "move":{
        "enable":true,
        "speed":2,//この数値を小さくするとゆっくりな動きになる
        "direction":"bottom",//下に向かって落ちる
        "random":false,//動きはランダムにならないように
        "straight":false,//動きをとどめない
        "out_mode":"out",//画面の外に出るように描写
        "bounce":false,//跳ね返りなし
        "attract":{
          "enable":false,
          "rotateX":600,
          "rotateY":1200
        }
      }
    },
    "interactivity":{
      "detect_on":"canvas",
      "events":{
        "onhover":{
          "enable":false,
        },
        "onclick":{
          "enable":false,
        },
        "resize":true
      },
    },
    "retina_detect":true
  });