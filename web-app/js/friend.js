(function() {
    var friendModule = function(){
        this.attachEvent();
    };

    friendModule.prototype = {
        attachEvent: function() {
            var self = this;
            $('#friendSection').on('click', function(){
                $.ajax({
                   url: 'friend'
                }).done(function(data){
                    var template = $(data);
                    popupWindow.contents(template);
                    popupWindow.show();
                });
            });
        }
    }

    window.friend = new friendModule();
})();