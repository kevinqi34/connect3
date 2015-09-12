

$(document).ready(function(){

	
		var offset = $('#square1').offset();
	


		var leftint = offset.left;
		var topint = offset.top;
		
	
		var w = window.innerWidth - 68;
		var h = window.innerHeight - 68;
		
		
		var squaredleft = 8;
		var squaredtop = 8;		
		
		
		
	//	alert(w); alert(h);
		
		window.setInterval(function () {
			
			
			if (leftint.left == squaredleft && leftint.top == squaredtop) {
			
			
			
			 squaredleft = Math.floor(Math.random()*( w - 8 +1)+8);
			 squaredtop = Math.floor(Math.random()*( h- 8 + 1)+8);
			 
			 
			 squaredleft2 = squaredleft + 60;
			 squaredleft3 = squaredleft - 60;
			 
			squaredtop3 = squaredtop + 60;
				//3	alert(squaredleft + ',' + squaredtop);
								
			
			
				
			$("#squared1").css({'left':squaredleft,'top':squaredtop,'display':'block'});
			$("#squared2").css({'left':squaredleft2,'top':squaredtop,'display':'block'});
			$("#squared3").css({'left':squaredleft3,'top':squaredtop,'display':'block'});
			
			
			if (squaredleft % 2 == 0) {			
			
			$("#square1").animate({"left": squaredleft}, "slow");
			$("#square1").animate({"top": squaredtop}, "slow");
			
			
			
			$("#square2").animate({"left": squaredleft2}, "slow");
			$("#square2").animate({"top": squaredtop}, "slow");
			
			
			
			$("#square3").animate({"left": squaredleft3}, "slow");
			$("#square3").animate({"top": squaredtop}, "slow");
			
			
		
		
			}else {
				
			$("#square1").animate({"top": squaredtop}, "fast");
			$("#square1").animate({"left": squaredleft}, "fast");
				
				
				
					$("#square2").animate({"left": squaredleft2}, "fast");
					$("#square2").animate({"top": squaredtop}, "fast");
			
				$("#square3").animate({"left": squaredleft3}, "fast");
				$("#square3").animate({"top": squaredtop}, "fast");				
				
				
				
				
				}
}
				leftint = $('#square1').offset();
		
		//	alert(leftint.left);


			},500);



});

		








