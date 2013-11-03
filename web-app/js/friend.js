(function() {
    var friendModule = function(){
        this.attachEvent();
    };
    friendModule.prototype = {
        data: {
            rolled: false
        },
        attachEvent: function() {
            var self = this;

            $('#friendPage, .title').on('click', function(e){
                e.preventDefault();

            });

            $('#searchUser').keyup(function(e){
               if($(this).val().length > 1){
                   self.searchUser($(this).val());
                   if(self.data.rolled == false){
                       self.rolling($('#searchUserResult'));
                   }
               }else{
                   if(self.data.rolled == true){
                       self.rolling($('#searchUserResult'));
                   }

               }
            });

        },

        searchUser : function(text) {
            var searchResult = $('#searchUserResult');
            $.ajax({
                url: 'friend/searchUser?searchText='+text
            }).done(function(html) {
                searchResult.html(html);
            });
        },

        rolling : function(rollElem){
            var toHeight = 0;
            if(this.data.rolled){
                this.data.rolled = false;
            }else{
                this.data.rolled = true;
                toHeight = 500;
            }
            rollElem.animate({
                height: toHeight
            }, 800);
        }
    }

    window.friend = new friendModule();
})();