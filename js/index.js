//  判断是否为IE
if ((navigator.userAgent.indexOf('MSIE') >= 0) && (navigator.userAgent.indexOf('Opera') < 0)){
	var str ='<script type="text/javascript" src="js/page.js"></script>';
	$('body').append(str);
}


function showCover(i){
	$(".cover").show();
	if(i === 2) {
		$(".show_img").attr("src","img/we-chat.jpg");
	}else if(i === 1) {
		$(".show_img").attr("src","img/qq.png");
	}
}

$(function(){
	
	//关闭遮罩层
	$(".cover").on("click", function(){
		$(".cover").hide();
	});
	
	// 滑过事件 设置背景与字体颜色
	$(".skill_panel a").hover(function() {
		$(this).addClass("a_bg_hover");
		$(this).children("div").addClass("div_bg_hover");
		$(this).children().children("i").addClass("i_col_hover");
	}, function(){
		$(this).removeClass("a_bg_hover");
		$(this).children("div").removeClass("div_bg_hover");
		$(this).children().children("i").removeClass("i_col_hover");
	});
	
	$(".skill_panel a:eq(0)").addClass("a_bg_cl");
	$(".skill_panel a div:eq(0)").addClass("div_bg_cl");
	$(".skill_panel a div i:eq(0)").addClass("i_col_cl");
	
	$(".contact_way a").hover(function(){
		$(this).addClass("a_bg_cl");
		$(this).children().addClass("i_col_hover2");
	},function(){
		$(this).removeClass("a_bg_cl");
		$(this).children().removeClass("i_col_hover2");
	});
	
	$(".contact_way a i").addClass("hover_i");
	
	$(".edu_banner img");
	
	
	// 获取头像在body中的位置
//	var iconE = $(".favicon div").offset();
//	var wid = $(".favicon div").outerWidth();
//	var hei = $(".favicon div").outerHeight();
	
//	var locaX = iconE.left + wid/2;
//	var locaY = iconE.top + hei/2;
//	
//	$("body").mousemove(function(e){
//		var X = e.pageX;
//		var Y = e.pageY;
//		if ((X < (locaX-wid/2)) && (Y < (locaY-hei/2))) {
//			$(".favicon div").css({background : "url('img/upleft.png') center"});
//		}else if ((X < (locaX-wid/2)) && (Y > (locaY-hei/2)) && (Y < locaY+hei/2)) {
//			$(".favicon div").css({background : "url('img/left.png') center"});
//		}else if ((X < (locaX-wid/2)) && (Y > (locaY+hei/2))) {
//			$(".favicon div").css({background : "url('img/downleft.png') center"});
//		}else if ((Y > (locaY+hei/2)) && (X > locaX-wid/2) && (X < locaX+wid/2)) {
//			$(".favicon div").css({background : "url('img/down.png') center"});
//		}else if ((X > (locaX+wid/2)) && (Y > (locaY+hei/2))) {
//			$(".favicon div").css({background : "url('img/downright.png') center"});
//		}else if ((X > (locaX+wid/2)) && (Y > (locaY-hei/2)) && (Y < locaY+hei/2)) {
//			$(".favicon div").css({background : "url('img/right.png') center"});
//		}else if ((X > (locaX+wid/2)) && (Y < (locaY-hei/2))) {
//			$(".favicon div").css({background : "url('img/upright.png') center"});
//		}else if ((Y < (locaY-hei/2)) && (X > locaX-wid/2) && (X < locaX+wid/2)) {
//			$(".favicon div").css({background : "url('img/up.png') center"});
//		}else {
//			$(".favicon div").css({background : "url('img/front.png') center"});
//		}
//	});
});

//百分数转小数
function toPoint(percent){
    var str=percent.replace("%","");
    str= str/100;
    return str;
}

function rewid() {
	var wid = $("body").width();
	if(wid > 1001){
		var wid = [];
		var level = $(".level");
		var div = $(".front div");
		for (var i = 0; i < level.length; i++) {
			wid[i] = (toPoint(level[i].innerText)*327) + "px";
		}
		return wid;
	}else if (wid < 1000) {
		var wid = [];
		var fontSize = parseInt($("html").css("font-size"));
		var frontWid = $(".front").width();
		var level = $(".level");
		var div = $(".front div");
		for (var i = 0; i < level.length; i++) {
			wid[i] = (toPoint(level[i].innerText)*frontWid)/fontSize + "rem";
		}
		return wid;
	}
	
}

function anmi() {
	
	var wid = rewid();
	
	$(".html5").animate({
		width:wid[0]
	}, 1000);
	
	$(".css3").animate({
		width:wid[1]
	}, 1000);
	
	$(".js").animate({
		width:wid[2]
	}, 1000);
	
	$(".jquery").animate({
		width:wid[3]
	}, 1000);
	
	$(".boot").animate({
		width:wid[4]
	}, 1000);
	
	$(".angular").animate({
		width:wid[5]
	}, 1000);
	
	$(".photo").animate({
		width:wid[6]
	}, 1000);
	
	$(".java").animate({
		width:wid[7]
	}, 1000);
	
	$(".mysql").animate({
		width:wid[8]
	}, 1000);

}