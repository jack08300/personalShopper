(function(){
    var friendListModule = function() {
        this.attachEvent();
    };

    friendListModule.prototype = {
        attachEvent: function(){
            var self = this;
            $('.requestUserButton').on('click', function(e){
                $(this).removeClass("bottomShadow button");
                $(this).addClass("requestSent");
                $(this).text("Request Sent");
                self.requestUser($(this).attr("userId"));
            });

        },

        requestUser : function(userId) {
            $.ajax({
                url: "friend/sendRequest?requestId=" + userId
            }).done(function(result){
                console.error(result);
            });
        }
    }

    return new friendListModule();
})();