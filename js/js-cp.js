//推荐带边框函数
		function cp(boxx,boxli,bigbox){
			var cpgo = $(boxx);	
			var cpli = $(boxli);
			var cplikd = cpli.width();
			var cplis = cpli.length;
			var b =0;
			
			function gooo(){
				if(b==cplis){
					b=0;
				}
				if(b==-1){
					b=cplis-1;
				}
				var l = (b*cplikd)-cplikd+20;
				var zhi = -l+"px";
				cpgo.animate({marginLeft:zhi},600); 
				cpli.eq(b).addClass("cur").siblings().removeClass("cur");
			}
					
			function left(){
					b++;
					gooo();
				};
			function right(){
					b--;
					gooo();
				};
					
			function cp_touch(bigbox) {
				var _box = bigbox;
				    var _start = 0;
				    var _end = 0;
				    
				    
				    _content = document.getElementsByClassName(_box)[0];
				    _content.addEventListener("touchstart", touchStart, false);
				    _content.addEventListener("touchmove", touchMove, false);
				    _content.addEventListener("touchend", touchEnd, false);
				    function touchStart(event) {
				        var touch = event.targetTouches[0];
				        _start = touch.pageX;
				    }
				    function touchMove(event) {
				        var touch = event.targetTouches[0];
				        _end = (_start - touch.pageX);
				    }
				
				    function touchEnd(event) {
				        if (_end < 50) {
				            right();
				            _end=0;
				        }else if(_end > -50){
				            left();
				            _end=0;
				        }
				    }
			}
			cp_touch(bigbox);
		}
	
	

