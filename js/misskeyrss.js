(function($) {

$.mamewaza_blog = function(conf) {
	//デフォルト値
	var dft = {
		//設置対象要素のjQuery selector
		selector: "#misskey_notes",
		//Feedアドレス
		feed: "https://misskey.io/@Fluoroid.rss",
		//表示件数（1～10）
		rpp: "10",
		//表示部分の高さ（autoまたは数字、単位はpx、「px」は不要）
		height: "auto",
		//本文表示有無（boolean）
		exp: true,
		//URL表示有無（boolean）
		url: true,
		date: 2,
		//cssのパス
		cssPath: ""
	};

	conf = $.extend({}, dft, conf);
	conf.date = parseInt(conf.date, 10);

	//値の確認
	if(!conf.selector || !$(conf.selector)[0] || !conf.feed || !conf.feed.toString().match(/^https?:\/\//i) ) {
		return "";
	}

	//日時表示の成形
	var zerofill = function(time) {
		return time < 10 ? "0" + time : time;
	};
	var format = function(ts) {
		if(!conf.date) {
			return "";
		}

		var t = new Date(ts*1000);

		var is_slash = conf.date == 3 || conf.date == 4;
		var with_time = conf.date == 2 || conf.date == 4;
		return t.getFullYear() + (is_slash ? "/" : "年") + (t.getMonth() + 1) + (is_slash ? "/" : "月") + t.getDate() + (is_slash ? "" : "日")
			+ (with_time ? " " + zerofill(t.getHours() ) + ":" + zerofill(t.getMinutes() ) + ":" + zerofill(t.getSeconds() ) : "");
	};

	//表示
	var set = function(res) {
		if(typeof(res) != "object" || !res.title || !res.url || typeof(res.articles) != "object") {
			return "";
		}

		//タイトルの設置
		var html = "<div><h5><a href=\"" + res.url + "\" target=\"_blank\">" + res.title + "</a></h5>";
		//entriesの設置
		html += "<ul class=\"mamewaza_blog\"" + (conf.height && conf.height.toString().match(/^\d+$/) ? " style=\"height:" + conf.height + "px\"" : "") + ">";
		for(var i = 0, j = 1; i < res.articles.length; i++) {
			//広告の排除
			if(res.articles[i].title.match(/^PR:/) ) {
				continue;
			}

			html += "<li><a href=\"" + res.articles[i].link + "\" target=\"_blank\" class=\"mamewaza_blog_title\">" + res.articles[i].title + "</a>"
				+ (conf.exp ? "<span class=\"mamewaza_blog_exp\">" + res.articles[i].desc.substr(0, 30) + "...</span>" : "")
				+ (conf.date ? "<span class=\"mamewaza_blog_date\">" + format(res.articles[i].date) + "</span>" : "")
				+ (conf.url ? "<a href=\"" + res.articles[i].link + "\" target=\"_blank\" class=\"mamewaza_blog_url\">" + res.articles[i].link + "</a>" : "")
				+ "</li>";

			if(conf.rpp && j == conf.rpp) {
				break;
			}

			j++;
		}
		html += "</ul>"
			+ "<div class=\"mamewaza_blog_exp\" style=\"display:block !important;visibility:visible !important;position:static !important;\">"
			+ "<span class=\"memewaza_asscembled\">assembled by <a href=\"http://mamewaza.com/\" target=\"_blank\" rel=\"nofollow\">まめわざ</a></span>"
			+ "</div>"
			+ "</div>";

		$(conf.selector).html(html);

	};

	//初期設定（googleの読込、cssの読込、google feed API実行）
	var init = function() {
		//外部cssの読込
		if(!$("link[href=\"" + conf.cssPath + "\"]")[0]) {
			if(document.createStyleSheet) {
				document.createStyleSheet(conf.cssPath);
			} else {
				$("head").append("<link href=\"" + conf.cssPath + "\" rel=\"stylesheet\" type=\"text/css\" />");
			}
		}

		var d = new Date();
		var hash = (d.getFullYear() ).toString() + (d.getMonth() < 9 ? "0" : "") + (d.getMonth() + 1).toString() + (d.getDate() < 10 ? "0" : "") + (d.getDate() ).toString();
		$.ajax( {
			"timeout": 5000,
			"url": "https://mamewaza.net/b/",
			"dataType" : "jsonp",
			"cache": true,
			"data": {"feed": conf.feed, "date": hash},
			"success": set,
			"error": function(res, status) {
			}
		} );
	};

	init();
};

})(jQuery);
