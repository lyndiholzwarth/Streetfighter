$(document).ready(function(){
	$('.ryu').mouseenter(function(){
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave (function(){
		$('.ryu-still').show();
		$('.ryu-ready').hide();
	})
	.mousedown (function(){
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show() .animate({
			'left': '1020px'}, 500,
			function(){
				$(this).hide();
				$(this).css('left','533px');
			});
	})
	.mouseup (function(){
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	});
	$(document).keydown(function(e){
		var key = e.which;
		if (key == 88){
		$('.ryu-ready').hide();
		$('.ryu-still').hide();
		$('.ryu-cool').show();}
 	});
	$(document).keyup(function(e){
		var key = e.which;
		if (key == 88){
		$('.ryu-cool').hide();
		$('.ryu-ready').show();
		$('.ryu-still').show();}
 	});

});

function playHadouken(){
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}

