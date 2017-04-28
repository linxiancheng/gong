$(function(){
	
	//首页轮播
	var box = $(".lunbo>ul");
//	var likd = $(".lunbo>ul>li").width();
	var likd = $(window).width();
	var lileng = $(".lunbo>ul>li").length;
	var yuandian = $(".nav_yd>span");
	var a=0;
	 function goleft(){
		a++;
		goo();
	};
		function goright(){
		a--;
		goo();
	};
	function goo(){
		if(a==lileng){
			a=0;
		}
		if(a==-1){
			a=lileng-1;
		}
		var l = a*likd;
		var zhi = -l+"px";
		box.animate({marginLeft:zhi},600); 
		yuandian.eq(a).addClass("nav_cur").siblings().removeClass("nav_cur");
	}
	var gotime = setInterval(goleft,3000);
	yuandian.click(function(){
		var b = $(this).index();
		a=b-1;
		goleft();
	});
	box.hover(function(){
		clearInterval(gotime);
	},function(){
		gotime = setInterval(goleft,5000);
	});
//	触摸事件
	function k_touch() {
		    var _start = 0,
		    	  _end = 0, 
		    _content = document.getElementById("slide");	
		    _content.addEventListener("touchstart", touchStart, false);
		    _content.addEventListener("touchmove", touchMove, false);
		    _content.addEventListener("touchend", touchEnd, false);
		    function touchStart(event) {
		    	clearInterval(gotime);
		        var touch = event.targetTouches[0];
		        _start = touch.pageX;
		    }
		    function touchMove(event) {
		    	clearInterval(gotime);
		        var touch = event.targetTouches[0];
		        _end = (_start - touch.pageX);
		    }
		
		    function touchEnd(event) {
		        if (_end < -50) {
		        	 goright();
		            _end=0;
		            gotime = setInterval(goleft,5000);
		        }else if(_end > 50){
		            goleft();
		            _end=0;
		            gotime = setInterval(goleft,5000);
		        }
		    }
	}
	k_touch();
	

	
});
