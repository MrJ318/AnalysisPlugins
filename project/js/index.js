function getCurrentTabUrl(callback) {
	//获取当前标签的网址和标题
	chrome.tabs.getSelected(function(tab) {
		var tabUrl = tab.url;
		callback(tabUrl);
	});
}

//监听点击事件
document.addEventListener('DOMContentLoaded', function() {
	getCurrentTabUrl(function(tabUrl) {
		var button1 = document.getElementById('button1');
		button1.href = "http://vip.26db.cn/b/?url=" + tabUrl;
		var button2 = document.getElementById('button2');
		button2.href = "https://660e.com/?url=" + tabUrl;
		var button3 = document.getElementById('button3');
		button3.href = "http://jx.618ge.com/?url=" + tabUrl;
	});
});
