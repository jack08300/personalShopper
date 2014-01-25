(function(){
    var friendListModule = function() {
        this.attachEvent();
    };

    friendListModule.prototype = {
        attachEvent: function(){
            var self = this;
            $('div.requestUserButton').on('click', function(e){
                $(this).removeClass("bottomShadow button");
                $(this).addClass("requestSent");
                $(this).text("Request Sent");
                self.requestUser($(this).attr("userId"));


            });

            $('div.acceptUserButton').on('click', function(e){

                    $(this).removeClass("bottomShadow button");
                    $(this).addClass("requestSent");
                    $(this).text("Accepted");
                    self.acceptUser($(this).attr("userId"));
            });

        },

        requestUser : function(userId) {
            $.ajax({
                url: "friend/sendRequest?requestId=" + userId
            }).done(function(result){
                console.error(result);
            });
        },

        acceptUser: function(userId){
            $.ajax({
                url: "friend/acceptUser?userId=" + userId
            }).done(function(result){
               if(result == 'error'){
                   alert("Error on Accepting Friend");
               }
            });
        }
    }

    return new friendListModule();
})();