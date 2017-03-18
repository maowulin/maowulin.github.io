
/*
 * @description : javaScript recalc_@_clientWidth
 * 				: reset_@_font-size
 * @author   : koojohn(郭钊)
 * @date     : 2016-08-22
 * 移动端rem的使用方法	PS:rem == 100px
 */
(function(){
	resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
	recalc = function (){
		var cWidth = document.documentElement.clientWidth || document.body.clientWidth;
		if (!cWidth) {
			return;
		};
		document.documentElement.style.fontSize = cWidth*(100/320) + 'px';
	};
	if (!document.addEventListener) {
		return;
	};
	window.addEventListener(resizeEvt, recalc, false);
    document.addEventListener('DOMContentLoaded', recalc, false);
})();

//请求全屏
function fullScreen(el) {
//  var el = document.documentElement,
    var rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullScreen,
        wscript;
 
    if(typeof rfs != "undefined" && rfs) {
        rfs.call(el);
        return;
    }
 
    if(typeof window.ActiveXObject != "undefined") {
        wscript = new ActiveXObject("WScript.Shell");
        if(wscript) {
            wscript.SendKeys("{F11}");
        }
    }
}

$(function(){
	
	var wid = $("body").width();
	var page = "";
	
	if(wid > 240 && wid <= 1000) {
		page = "<div id='page0' class='section'></div><div id='page1' class='section sec'></div><div id='page2' class='section'></div><div id='page3' class='section'></div><div id='page4' class='section'></div><div id='page5' class='section'></div>";
		$("#cubeTransition").html(page);
		var section = document.getElementsByClassName("section");
//		section[0].requestFullScreen();

		fullScreen(section[0])
		
		$.ajax({
			type    : "get",
			url     : "html/intro.html",
			success : function(data){
				$("#page0").html(data);
			}
		});
		
		$.ajax({
			type    : "get",
			url     : "html/info_mobile.html",
			success : function(data){
				$("#page1").html(data);
				
				$(".mo_cover").on("click", function(){
					$(".mo_cover").hide();
				});
			}
		});
		
		$.ajax({
			type    : "get",
			url     : "html/find.html",
			success : function(data){
				$("#page5").html(data);
			}
		});
		
		
		
	}else if(wid > 1001) {
		page = "<div id='page1' class='section'></div><div id='page2' class='section'></div><div id='page3' class='section'></div><div id='page4' class='section'></div></div>";
		$("#cubeTransition").html(page);
		
		$.ajax({
			type    : "get",
			url     : "html/infomation.html",
			success : function(data){
				$("#page1").html(data);
			}
		});
		
		var count = 1;
		var start = setInterval(function(){
			var src = "img/about_"+count+".png"
			$(".banner img").attr("src",src);
			count++;
			if(count > 3){
				count = 1;
			}
		},3000);
	}

	
	
	$.ajax({
		type    : "get",
		url     : "html/skill.html",
		success : function(data){
			$("#page2").html(data);
		}
	});
	
	$.ajax({
		type    : "get",
		url     : "html/education.html",
		success : function(data){
			$("#page3").html(data);
		}
	});
	
	$.ajax({
		type    : "get",
		url     : "html/job.html",
		success : function(data){
			$("#page4").html(data);
		}
	});
	
	$(".skill_panel a:eq(0)").addClass("div_back");
	$(".skill_panel a div:eq(0)").addClass("hover_div");
	$(".skill_panel a div i:eq(0)").addClass("hover_i");

});

function animationIn(i){
//	console.log(i,'i\'m in')
	switch(i) {
	    case 1:
	        $('.page2 h2').fadeIn();
	        break;
	    case 2:
	        $('.page3 h2').animate({top:'40%',left:'30%'},1000);
	        break;
		case 3:
			setTimeout(function(){
				$('.page4 h2').addClass('ani')
//				console.log('hhh')
			},0)
       		break;
    		default:
        	;
	}
}

function animationOut(i){
//	console.log(i,'i\'m out')
	switch(i) {
	    case 1:
	        $('.page2 h2').fadeOut();
	        break;
	    case 2:
	        $('.page3 h2').animate({top:0,left:0},1000);
	        break;
		case 3:
	        $('.page4 h2').removeClass('ani')
	        break;
	    default:
	        ;
	}
}

// 判断ele1 的父元素中是否包含 ele2
function findParent(ele1, ele2){
	ele1 = ele1.parentNode;
}
