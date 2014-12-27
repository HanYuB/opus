window.onload = function(){
	var contentAside = document.getElementById('content-aside');
	var content_aside = contentAside.getElementsByTagName('li');
	console.log(content_aside);



	for (var i = 0, j = content_aside.length; i < j; i++) {
		content_aside[i].onclick = function(){
			for (var i = 0; i < j; i++) {
				content_aside[i].className = '';
			};
			this.className = 's_active';
		}
	};











};