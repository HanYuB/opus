$(function(){
	var zindex=10;
	$('.small-img ul li').each(function(){
		$(this).click(function(){
			var num = $(this).children().attr("attr");
			//console.log(num);
			zindex += 10;
			var src = $(this).children().attr("src");
			//console.log(src);
			var str = "<img src='"+src+"' width='200' height='200'>"
			$('.big-img').html(str);
		});
	});	
});