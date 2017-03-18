$(function() {
	var ind = 0;
	//传递页面参数
	var count = 1;
	var length = $('#cubeTransition>div').length,
		current = 1,
		next = 1,
		outClass, inClass, onGoing = false;
	$('#cubeTransition>div:eq(' + (current - 1) + ')').show(1);


	for (i = 0; i < length; i++) {
		var bullet = $("<li></li>");
		if (i == 0) bullet.addClass('active');
		$("#bullets").append(bullet);
	}

	function openIndex(i) {
		if (!onGoing && next != i) {
			onGoing = true;
			next = i
			outClass = current > i ? 'rotateCubeBottomOut top' : 'rotateCubeTopOut top'
			inClass = current > i ? 'rotateCubeBottomIn' : 'rotateCubeTopIn';
			show(i);		
		}
	}

	function trans(direction) {
		
		if (!onGoing) {
			onGoing = true;
			if (direction == 'up') {
				next = current > 1 ? current - 1 : length;
				outClass = 'rotateCubeBottomOut top';
				inClass = 'rotateCubeBottomIn';
				count--;
			} else {
				next = current < length ? current + 1 : 1;
				outClass = 'rotateCubeTopOut top';
				inClass = 'rotateCubeTopIn';
				count++;
			}
			
			if(count > length){
				count = 1;
			}
			if(count < 1) {
				count = length;
			}
			
			show(count);
			
//			console.log(count);
//			console.log(i);
		}
	}

	function show(i) {
		$('#cubeTransition>div:eq(' + (current - 1) + ')').addClass(outClass);
		$('#cubeTransition>div:eq(' + (next - 1) + ')').addClass(inClass);
		$('.skill_panel>a:eq(' + (current - 1) + ')').removeClass('active');
		$('.skill_panel>a:eq(' + (next - 1) + ')').addClass('active');
		$('#cubeTransition>div:eq(' + (next - 1) + ')').show();
		animationOut(current-1);
		setTimeout(function() {
			$('#cubeTransition>div:eq(' + (current - 1) + ')').hide();
		}, 500);

		setTimeout(function() {
			$('#cubeTransition>div:eq(' + (current - 1) + ')').removeClass(outClass);
			$('#cubeTransition>div:eq(' + (next - 1) + ')').removeClass(inClass);
			animationIn(next-1)
			current = next;
			onGoing = false;
		}, 800);
		
		$(".skill_panel a:eq("+(i-1)+")").addClass("a_bg_cl").siblings().removeClass("a_bg_cl");
		$(".skill_panel a div:eq("+(i-1)+")").addClass("div_bg_cl").parent().siblings().children("div").removeClass("div_bg_cl");
		$(".skill_panel a div i:eq("+(i-1)+")").addClass("i_col_cl").parent().parent().siblings().children().children().removeClass("i_col_cl");
		
		var wid = $("body").width();
		if (wid > 1001) {
			if(i === 2){
				anmi();
			}
		}else {
			if(i === 3){
				anmi();
			}
		}
		
		
	}

	$(document).ready( function() {
		$(document).mousewheel(function(e, delta) {
			e.preventDefault();
			if (delta < 0) {
				trans('down');
			} else {
				trans('up');
			}
		});
		$(document).keydown(function(e) {
			if (e.keyCode == 38 || e && e.keyCode == 37) {
				trans('up');
			}
			if (e.keyCode == 39 || e && e.keyCode == 40) {
				trans('down');
			}

		});

		$(document).swipe({
			swipe: function(event, direction, distance, duration, fingerCount) {
				if (direction == "up") {
					trans('down');
				} else if (direction == "down") {
					trans('up');
				}
			}
		});

		$('.skill_panel>a').on('click', function() {
			
			openIndex($(this).index() + 1);
			
			ind = $(this).index() + 1;
			
			count = ind;
		});
		$('.aboutme').trigger("click");
	});
});