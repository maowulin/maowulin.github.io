$(function(){
	//菜单栏按钮事件
	$(".aboutme").on("click", function(){
		//请求页面
		$(".aboutme").addClass("a_bg_cl").siblings().removeClass("a_bg_cl");
		$(".aboutme div").addClass("div_bg_cl").parent().siblings().children("div").removeClass("div_bg_cl");
		$(".aboutme div i").addClass("i_col_cl").parent().parent().siblings().children().children().removeClass("i_col_cl");
	
		$.ajax({
			type    : "get",
			url     : "html/infomation.html",
			success : function(data){
				$("#cubeTransition").html(data);
			}
		});
		
	});
	
	$(".per_skill").on("click", function(){
		$(".per_skill").addClass("a_bg_cl").siblings().removeClass("a_bg_cl");
		$(".per_skill div").addClass("div_bg_cl").parent().siblings().children("div").removeClass("div_bg_cl");
		$(".per_skill div i").addClass("i_col_cl").parent().parent().siblings().children().children().removeClass("i_col_cl");
		$.ajax({
			type    : "get",
			url     : "html/skill.html",
			success : function(data){
				$("#cubeTransition").html(data);
				anmi();
			}
		});
		
	});
	
	$(".edu_exper").on("click", function(){
		$(".edu_exper").addClass("a_bg_cl").siblings().removeClass("a_bg_cl");
		$(".edu_exper div").addClass("div_bg_cl").parent().siblings().children("div").removeClass("div_bg_cl");
		$(".edu_exper div i").addClass("i_col_cl").parent().parent().siblings().children().children().removeClass("i_col_cl");
		$.ajax({
			type    : "get",
			url     : "html/education.html",
			success : function(data){
				$("#cubeTransition").html(data);
			},
			error   : function(error) {
				console.log("错误");
			}
		});
	});
	
	$(".job_exper").on("click", function(){
		$(".job_exper").addClass("a_bg_cl").siblings().removeClass("a_bg_cl");
		$(".job_exper div").addClass("div_bg_cl").parent().siblings().children("div").removeClass("div_bg_cl");
		$(".job_exper div i").addClass("i_col_cl").parent().parent().siblings().children().children().removeClass("i_col_cl");
		$.ajax({
			type    : "get",
			url     : "html/job.html",
			success : function(data){
				$("#cubeTransition").html(data);
			}
		});
	});
	$(".aboutme").trigger("click");
});
