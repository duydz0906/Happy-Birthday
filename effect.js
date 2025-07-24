
$(window).on('load', function(){
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');

	// Add card and paper elements to the DOM
	if ($('.congrats-card').length === 0) {
		$('body').append(`
			<div class="congrats-card" style="display:none;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);z-index:9999;cursor:pointer;">
				<img src="Images/bd1.jpg" alt="Surprise Card" style="width:140px;height:auto;border-radius:16px;box-shadow:0 4px 16px #0002;transition:box-shadow 0.2s;display:block;">
			</div>
			<div class="congrats-paper" style="display:none;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#fffbe8;padding:40px 32px 32px 32px;border-radius:12px;box-shadow:0 4px 32px #0002;z-index:10000;min-width:320px;min-height:180px;font-family: 'Indie Flower', cursive, sans-serif;font-size:1.5rem;line-height:2;white-space:pre-wrap;"></div>
		`);
	}
});

$('document').ready(function(){
	var vw;
	$(window).resize(function(){
		vw = $(window).width()/2;
		$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
		$('#b11').animate({top:240, left: vw-350},500);
		$('#b22').animate({top:240, left: vw-250},500);
		$('#b33').animate({top:240, left: vw-150},500);
		$('#b44').animate({top:240, left: vw-50},500);
		$('#b55').animate({top:240, left: vw+50},500);
		$('#b66').animate({top:240, left: vw+150},500);
		$('#b77').animate({top:240, left: vw+250},500);
	});

	function loopOne() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b1').animate({left:randleft,bottom:randtop},10000,function(){ loopOne(); });
	}
	function loopTwo() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b2').animate({left:randleft,bottom:randtop},10000,function(){ loopTwo(); });
	}
	function loopThree() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b3').animate({left:randleft,bottom:randtop},10000,function(){ loopThree(); });
	}
	function loopFour() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b4').animate({left:randleft,bottom:randtop},10000,function(){ loopFour(); });
	}
	function loopFive() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b5').animate({left:randleft,bottom:randtop},10000,function(){ loopFive(); });
	}
	function loopSix() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b6').animate({left:randleft,bottom:randtop},10000,function(){ loopSix(); });
	}
	function loopSeven() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b7').animate({left:randleft,bottom:randtop},10000,function(){ loopSeven(); });
	}

	$('#turn_on').click(function(){
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('body').addClass('peach');
		$(this).fadeOut('slow');

		setTimeout(function(){
			var audio = $('.song')[0];
			audio.play();
			$('#bulb_yellow').addClass('bulb-glow-yellow-after');
			$('#bulb_red').addClass('bulb-glow-red-after');
			$('#bulb_blue').addClass('bulb-glow-blue-after');
			$('#bulb_green').addClass('bulb-glow-green-after');
			$('#bulb_pink').addClass('bulb-glow-pink-after');
			$('#bulb_orange').addClass('bulb-glow-orange-after');
			$('body').addClass('peach-after');
		}, 5000);

		setTimeout(function(){
			$('.bannar').addClass('bannar-come');
		}, 11000);

		// Show the congrats card after 20 seconds from turning on the lights
		setTimeout(function() {
			$('.congrats-card').fadeIn('slow');
		}, 20000);

		setTimeout(function(){
			$('.balloon-border').animate({top:-500},8000);
			$('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
			$('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two');
			loopOne(); loopTwo(); loopThree(); loopFour(); loopFive(); loopSix(); loopSeven();
		}, 17000);

		setTimeout(function(){
			$('.cake').fadeIn('slow');
		}, 23000);

		setTimeout(function(){
			$('.fuego').fadeIn('slow');
		}, 26000);

		setTimeout(function(){
			vw = $(window).width()/2;
			$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
			$('#b1').attr('id','b11');
			$('#b2').attr('id','b22');
			$('#b3').attr('id','b33');
			$('#b4').attr('id','b44');
			$('#b5').attr('id','b55');
			$('#b6').attr('id','b66');
			$('#b7').attr('id','b77');
			$('#b11').animate({top:240, left: vw-350},500);
			$('#b22').animate({top:240, left: vw-250},500);
			$('#b33').animate({top:240, left: vw-150},500);
			$('#b44').animate({top:240, left: vw-50},500);
			$('#b55').animate({top:240, left: vw+50},500);
			$('#b66').animate({top:240, left: vw+150},500);
			$('#b77').animate({top:240, left: vw+250},500);
			$('.balloons').css('opacity','0.9');
			$('.balloons h2').fadeIn(3000);
		}, 29000);

		setTimeout(function(){
			$('.cake').fadeOut('fast').promise().done(function(){
				$('.message').fadeIn('slow');
			});
			var i = 0;
			function msgLoop(i) {
				$("p:nth-child("+i+")").fadeOut('slow').delay(800).promise().done(function(){
					i = i + 1;
					$("p:nth-child("+i+")").fadeIn('slow').delay(1000);
					if(i == 50){
						$("p:nth-child(49)").fadeOut('slow').promise().done(function () {
							$('.cake').fadeIn('fast');
						});
					} else {
						msgLoop(i);
					}
				});
			}
			msgLoop(i);
		}, 34000);
	});
	// Card click handler and typewriter effect
	$(document).on('click', '.congrats-card', function() {
		$(this).fadeOut('fast', function() {
		var messages = [
			"Như ơi, chúc mừng sinh nhật! 🎉\n",
			"Chúc bạn thêm một tuổi mới thật nhiều niềm vui,\n",
			"Bình yên trong tâm, rực rỡ trong lòng.\n",
			"Mọi điều tốt đẹp sẽ luôn ở bên bạn.\n",
			"Gửi tất cả yêu thương đến bạn."
		];

			var paper = $('.congrats-paper');
			paper.html("").fadeIn('fast');
			var fullText = '';
			var msgIdx = 0, charIdx = 0;
			function typeWriter() {
				if (msgIdx < messages.length) {
					if (charIdx < messages[msgIdx].length) {
						fullText += messages[msgIdx][charIdx];
						paper.text(fullText + '|');
						charIdx++;
						setTimeout(typeWriter, 50 + Math.random()*50);
					} else {
						fullText += '\n';
						charIdx = 0;
						msgIdx++;
						setTimeout(typeWriter, 500);
					}
				} else {
					paper.text(fullText);
				}
			}
			typeWriter();
		});
	});
});