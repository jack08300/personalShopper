
createButtons = (function() {
	var  buttons
		,positionY
		,positionX
		,position
		,subButton
		,display = false
		,duration = 400;
	return {
		init: function(buttons){
            this.buttons = buttons;
			for(var i=0;i<buttons.length;i++){
				subButton =$("#"+buttons[i].attr("subButton"));
				subButton.children(".subButton").each(function(){
					$(this).css({
						"top": buttons[i].position().top + buttons[i].height()/2,
						"left": buttons[i].position().left
					});
				});
				
				buttons[i].click(function(){
					subButton =$("#" + $(this).attr("subButton"));

					if(display == true){
						createButtons.reverse();
						display = false;
					}else{
						positionX = $(this).position().left + 5;
						positionY = $(this).position().top + 50;
						createButtons.expand("bottom", 50, 40);
						display = true;
					}
				});
			}
			
		},
		
		expand: function(position, x, y){
			var moveY = positionY + y
				, movementX = positionX;
			
			subButton.children(".subButton").each(function(){
				
				$(this).fadeIn(duration).animate({
					"top": moveY,
					"left": movementX
				},{duration: duration, queue: false});
				movementX += 150;
			});

			
		},
		
		reverse: function(){
			subButton.children(".subButton").each(function(){
				$(this).fadeOut(duration).animate({
					"top": positionY,
					"left": positionX
				},{duration: duration, queue: false});
			});
		}
		
			
	}
})();

$(document).ready(function() {
	var buttons = [$('#createBuySection'), $('#personalInforSection')];
	createButtons.init(buttons);
	//createButtons.init($('#personalInforSection'));
});