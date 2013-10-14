
createButtons = (function() {
	var  positionY
		,positionX
		,subButton
		,display = false
		,duration = 400;
	return {
		init: function(button){
		    subButton =$("#"+button.attr("subButton"));
		    subButton.children(".subButton").each(function(){
		    	$(this).css({
		    		"top": button.offset().top + button.height()/2,
		    		"left": button.offset().left
		    	});
		    });

		    button.click(function(e){
                e.preventDefault();
		    	subButton =$("#" + $(this).attr("subButton"));

		    	if(display == true){
		    		createButtons.reverse();
		    		display = false;
		    	}else{
		    		positionX = $(this).offset().left + 5;
		    		positionY = $(this).offset().top + 50;
		    		createButtons.expand("bottom", 50, 40);
		    		display = true;
		    	}
		    });

			
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
	    },

        hide: function(){
            subButton.children(".subButton").each(function(){
               $(this).hide();
               display = false;
            });
        }
    }
})();

$(document).ready(function() {
	createButtons.init($('#createBuySection'));
    $(".subButton").bind("click",function(){
        createButtons.hide();
        createButtons.reverse();
        var $popBackground = $('#popupWindowBackground');
        var friendSection =  $('#friendSection');
        $popBackground.show();

        if($(this).attr("class").indexOf("deliverButton") != -1){
            friendSection.addClass("friendSectionPopUp");
            $('.friendFrame').show();
            friendSection.css({
               "top": $('.friendFrame').position().top,
               "left": $('.friendFrame').position().left - 1
            });
            friendSection.animate({
                "height": $(document).height() - 200
            });

            $.ajax({
                url: "room"
            }).done(function(html){
                $('#roomCreation').html(html);
                $('#roomCreation').css({
                    "top": friendSection.offset().top,
                    "left": $('.indexBody').offset().left,
                    "height":  $(document).height() - 200
                });
                $('#roomCreation').show();
            });

        }else if($(this).attr("class").indexOf("deliverButton") != -1){

        }
    });

    $('#popupWindowBackground .closeButton').click(function(){
        closeCreatePopup();
//        var self = $(this);
//        $('#friendSection').animate({
//           "height": "400px"
//        }, function(){
//            self.parent().hide();
//            $(this).removeClass("friendSectionPopUp");
//            $('this').removeAttr("style");
//            $('.friendFrame').hide();
//        });
    });
	//createButtons.init($('#personalInforSection'));
});

function closeCreatePopup(){
    $('#friendSection').animate({
        "height": "400px"
    }, function(){
        $('#popupWindowBackground').hide();
        $(this).removeClass("friendSectionPopUp");
        $('this').removeAttr("style");
        $('.friendFrame').hide();
    });
}