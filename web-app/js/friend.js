(function() {
    var friendModule = function(){
        this.attachEvent();
    };

    friendModule.prototype = {
        attachEvent: function() {
            var self = this;

            $('#friendPage, .title').on('click', function(e){
                e.preventDefault();

            });

            $('#searchUser').keyup(function(e){
               if($(this).val().length > 3){
                    self.searchUser($(this).val());
               }
            });
        },

        searchUser : function(text) {
            var friendList = $('#friendList');
            $.ajax({
                url: 'friend/searchUser?searchText='+text
            }).done(function(html) {
                friendList.html(html);
            });
        }
    }

    window.friend = new friendModule();
})();