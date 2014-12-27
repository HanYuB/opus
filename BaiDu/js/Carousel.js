window.onload = function(){
	var carouselBig = document.getElementById("carousel-big");
	var carouselSmall = document.getElementById("carousel-small");
	var carousel_small = carouselSmall;
	var carousel_small_li = carouselSmall.getElementsByTagName("li");
	var carousel_big_content = carouselBig.getElementsByTagName('div');
	var z_index = 10;
	//console.log("yes");

	for (var i = 0, j_li= carousel_small_li.length; i < j_li; i++) {
		carousel_small_li[i].onclick = function(){
			z_index++;
			//console.log(j_li);
			for (var k = 0; k < j_li; k++) {
				carousel_small_li[k].getElementsByTagName("img")[0].className = '';
				//carousel_small_li[k].style.alpha.opacity = 40;
			};
			// this.attributes['info'].nodeValue
			carousel_big_content[this.attributes['myattr'].nodeValue].style.zIndex = z_index;
			this.getElementsByTagName('img')[0].className = 'opacity active';
			//console.log(carousel_small.offsetLeft);
			if (this.attributes['myattr'].nodeValue == 4 && carousel_small.offsetLeft == 327) {
				s_click('left', 1);
			}else if (this.attributes['myattr'].nodeValue== 5 && carousel_small.offsetLeft == 242) {
				s_click('left', 2);
			};

			if (this.attributes['myattr'].nodeValue == 1) {
				s_click('right', 1);
			}else if (this.attributes['myattr'].nodeValue== 2 && carousel_small.offsetLeft == 157) {
				s_click('right', 2);
			};
			//console.log(this.attributes['myattr'].nodeValue);
			//this.style.alpha.opacity = 100;
		};
	};

	function s_click(direction, num){

		switch(direction){
			case 'left':
				left(num);
			break;

			default:
				right(num);
			break;
		};

		function left(num){
			if (num == 1) {
				carousel_small.style.left = -85 + 'px';
			}else{
				carousel_small.style.left = -170 + 'px';
			}
		};
		function right(num){
			if (num == 1) {
				carousel_small.style.left = 0 + 'px';
			}else{
				carousel_small.style.left = -85 + 'px';
			}
		}
	};



	var contentAside = document.getElementById('content-aside');
	var content_aside = contentAside.getElementsByTagName('li');
	//console.log(content_aside);

	for (var i1 = 0, j = content_aside.length; i1 < j; i1++) {
		content_aside[i1].onclick = function(){
			for (var i2 = 0; i2 < j; i2++) {
				content_aside[i2].className = '';
			};
			this.className = 's_active';
			var num = this.attributes['self-attr'].nodeValue;
			//console.log(num);
			switch(num){
				case '1':
					display_none('content-div-li-new');
					display_none('content-div-li-music');
					display_block('content-div-li-guide');
				break;
				case '2':
					display_none('content-div-li-guide');
					display_none('content-div-li-music');
					display_block('content-div-li-new');
				break;
				default:
					display_none('content-div-li-guide');
					display_none('content-div-li-new');
					display_block('content-div-li-music');
				break;
			}
		}
	};

	function display_none(ele){
		var contentDiv = document.getElementById(ele);
		contentDiv.style.display = 'none';
	}
	function display_block(ele){
		var contentDiv = document.getElementById(ele);
		contentDiv.style.display = 'block';
	}



	var my_guide = document.getElementById('my-guide');
	var my_recommend = document.getElementById('my-recommend');
	//var my_guide_child = document.getElementById('my-guide-child');
	//var my_recommend_child = document.getElementById('my-recommend-child');

	my_guide.onclick = function(){
		this.className = 'guide-mine-select';
		my_recommend.className = '';
		display_none('my-recommend-child');
		display_block('my-guide-child');
	};

	my_recommend.onclick = function(){
		this.className = 'guide-mine-select';
		my_guide.className = '';
		display_none('my-guide-child');
		display_block('my-recommend-child');
	};


}