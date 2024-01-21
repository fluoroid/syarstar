$(function() {
	//デフォルト値
	var dft = {
		selector: "#misskey_notes",
		feed: "../php/rss.php",
		rpp: "10",
	};

	// 日付整形
	var zerofill = function(time) {
		return time < 10 ? "0" + time : time;
	};
	var format = function(ts) {
		var t = new Date(ts);
		return t.getFullYear() + "年" + (t.getMonth() + 1) + "月" + t.getDate() + "日" + " " + zerofill(t.getHours()) + ":" + zerofill(t.getMinutes()) + ":" + zerofill(t.getSeconds());
	};

	// id取得
	var getusrid = function(id) {
		let id_txt = id.substring(id.indexOf('@'));
		return id_txt;
	};

	// コンテンツ整形
	var format_content = function(ipt) {
		var text = ipt;
		return text;
	};

	// rss読み込み
	$.ajax({
		url: dft.feed,
		type: "get",
		xmlType: 'xml',
		cache: false,
		"timeout": 5000,
		success: function(data) {
			// RSSにitem要素がひとつもなかった場合
            if($('entry', data).length < 1) {
            	console.log('表示するノートがありません');
            	return false;
            }

			// 抽出
			$(dft.selector).append('<ul class = "misskey_notes">');
			var usrurl = $(data).find("uri").text();
			var usrid = $(data).find("uri").text();
			var usrname = $(data).find("name").text();
			var logo = $(data).find("logo").text();
			$(data).find("entry").each(function(index, item){
				var id = $(item).find('id').text();
				var content = $(item).find('content').text();
				var date = $(item).find('updated').text();
				$(dft.selector).append("<li class = \"misskey_exp\">"
					+ "<div class=\"misskey_icon\"><a href=\"" + usrurl + "\" target=\"_blank\" rel=\"noopener noreferrer\"><img src=\"" + logo + "\"></a></div>"
					+ "<div class = \"misskey_main_content\">"
						+ "<div class=\"misskey_usrname\"><a href=\"" + usrurl + "\" target=\"_blank\" rel=\"noopener noreferrer\">" + usrname + "</a> " + getusrid(usrid) + "</div>"
						+ "<div class=\"misskey_content\"><a href=\"" + id + "\" target=\"_blank\" rel=\"noopener noreferrer\">" + format_content(content) + "</a></div>"
						+ "<div class=\"misskey_date\">" + format(date) + "</div>"
					+ "</div></li>");
			});
			$(dft.selector).append('</ul>');

		},
		error: function(err) {
			console.log(err);
		}
	});
});
