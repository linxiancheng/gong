$(function(){
	//	搜索样式
	$(".nav_mian_ss img").click(function(){
		$(".sousuo").fadeToggle();
	});
	$(".nav_ss img").click(function(){
		$(".sousuo").fadeToggle();
	});
	$(".ss_top>form>a").click(function(){
		$(".sousuo").fadeToggle();
	});
//	点赞换图标
	$(".dianzan ul li a:first").click(function(){
		$(".dianzan ul li a:first span").removeClass("dz_img1").addClass("dz_img5");
	});
	$(".abb", parent.document).click(function(){
		$(this).hide();
	});
	
	$(".an_btn").click(function(){
		var display =$(".boxl").css('display');
		$(".boxl").toggle();
				if(display == 'block'){
					$(".boxr").css("width","100%");
					$(".cbdh").css({width:"0%"});
					$(".img_zs .img_top h3").css({
						"font-size":"14px",
						"float":"inherit"
					});
				}else{
					$(".boxr").css("width","70%");
					$(".cbdh").css("text-align","center");
					$(".cbdh ul li:first a").html("退出登录");
					$(".cbdh").animate({width:"30%"},"fast");
					$(".img_zs .img_top h3").css({
						"font-size":"12px",
						"float":"right"
					});
				
				}
			});
});
