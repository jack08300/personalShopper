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
               var searchUser =  $('#searchUserResult');
               if($(this).val().length > 1){
                   if(self.data.rolled == false){
                       self.rolling(searchUser);
                       spinner.displaySpinner(searchUser);
                   }
                   self.searchUser($(this).val());
               }else{
                   if(self.data.rolled == true){
                       self.rolling(searchUser);
                   }
               }
            });

            $('#friendListPage').on('click', function(e){

                if(self.data.rolled == true){
                    self.rolling($('#searchUserResult'));
                }
            });

            $('#requestListPage').on('click', function(e){

                var searchUser =  $('#searchUserResult');

                    if(self.data.rolled == false){
                        self.rolling(searchUser);
                        spinner.displaySpinner(searchUser);
                    }
                    self.requestList();
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

        requestList: function(){
            var searchResult = $('#searchUserResult');
            $.ajax({
                url: 'friend/requestList'
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