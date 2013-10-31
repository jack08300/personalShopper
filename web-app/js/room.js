(function() {
    var roomOnDesktopModule = function(){
        this.attachEvent();
    };

    roomOnDesktopModule.prototype = {

        room : $('#currentRooms'),

        attachEvent : function() {
            var self = this;

            $('#currentRooms, .rooms .theRoom').on('click', function(){
                self.roomOnClick($(this));
            });
        },

        roomOnClick : function(clicked) {
            var roomId = clicked.attr("roomId");

            this.enterRoom(roomId);
        },

        enterRoom : function(roomId){
            var self = this;
            $.ajax({
               url: 'room/enterRoom?roomId='+roomId
            }).done(function(data) {
                self.roomPopup(data);
            }).error(function(error) {
                alert("Error occur: " + error);
            });
        },

        roomPopup : function(roomData){
            popupWindow.contents(roomData);
            popupWindow.show();
        }

    }

    return new roomOnDesktopModule();
})();
