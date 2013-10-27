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

        if($(this).attr("class").indexOf("deliverButton") != -1){
            $.ajax({
                url: "room"
            }).done(function(html){
                popupWindow.contents(html);
                popupWindow.show();
            });

        }else if($(this).attr("class").indexOf("deliverButton") != -1){

        }
    });
});

(function(){
    var popupWindow = function() {
        this.attachEvent();
    };

    popupWindow.prototype = {
        self : $('#popupWindow'),
        content : $('#popContent'),

        attachEvent: function() {
            var _this = this;
            $('#popupWindow .closeButton').click(function(){
                _this.close();
            });
        },
        close : function() {
            var _this = this;
            _this.content.fadeOut('fast', function() {
                _this.content.html("");
                _this.self.fadeOut('fast');
            });

        },

        show: function() {
            var _this = this;
            _this.centerContent();
            _this.self.fadeIn('fast', function() {
                _this.content.fadeIn('fast');
            });
        },

        centerContent: function() {
            this.content.css({
                "top" : 50,
                "left": ($(document).width()/2) - (this.content.children('div:first').width()/2)
            });

        },

        contents: function(html){
            this.content.html(html);
            this.centerContent();

        }

    }
    window.popupWindow = new popupWindow();
})();