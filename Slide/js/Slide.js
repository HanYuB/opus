var number = 9999;
var time = '';

time = setInterval(function(){
	number--;
	slide(number%3);
},10000);

$('.slide-body').mouseenter(function(){
	clearTimeout(time);
	$('.prev').mouseover(function(){
		$(this).addClass('mouseover');
	}).mouseout(function(){
		$(this).removeClass('mouseover');
	}).css('display','block');
	$('.next').mouseover(function(){
		$(this).addClass('mouseover');
	}).mouseout(function(){
		$(this).removeClass('mouseover');
	}).css('display','block');
});

$('.slide-body').mouseleave(function(){
	$('.prev').css('display','none');
	$('.next').css('display','none');
	time = setInterval(function(){
		number--;
		slide(number%3);
	},10000);
});

$('.prev').click(function(){
	clearTimeout(time);
	number--;
	slide(number%3);
	console.log('prev='+number);
});

$('.next').click(function(){
	clearTimeout(time);
	number++;
	slide(number%3);
	console.log('next='+number);
});

$('.list li').each(function(){
	$(this).click(function(){
		$('.list li').each(function(){
			$(this).css("backgroundColor","#cddbdb");
		});
		$(this).css("backgroundColor","#006f9d");
		slide($(this).attr('myattr'));
	});
});

function slide(num){
	var nnum = (-num%3)*960+'px'; 
	$(".slide-img li").animate({
		left: nnum
	},1000);
	$('.list li').each(function(){
		$(this).css("backgroundColor","#cddbdb");
	});
	$('.list li').eq(num%3).css("backgroundColor","#006f9d");
}