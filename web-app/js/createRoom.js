$(document).ready(function() {
    var createRoomModule = function() {
        this.init();
    };

    createRoomModule.prototype = {

        bindListener : function(){
            var self = this;

            $( "#dateStartField" ).datepicker({
                defaultDate: "+1w",
                changeMonth: true,
                numberOfMonths: 2,
                onClose: function( selectedDate ) {
                    $( "#dateEndField" ).datepicker( "option", "minDate", selectedDate );
                }
            });
            $( "#dateEndField" ).datepicker({
                defaultDate: "+1w",
                changeMonth: true,
                numberOfMonths: 2,
                onClose: function( selectedDate ) {
                    $( "#dateStartField" ).datepicker( "option", "maxDate", selectedDate );
                }
            });

            $('#brandText').keyup(function(e) {
                var code = e.which;
                if(code == '13'){
                    if($(this).val().length > 1){
                        self.createSelectedLabel($(this).val(), $('#brandLabels'), "brandLabel");
                        $(this).val("");
                    }
                }
            });

            $('#locationText').keyup(function(e) {
                var code = e.which;
                if(code == '13'){
                    if($(this).val().length > 1){
                        self.createSelectedLabel($(this).val(), $('#locationLabel'), "locationLabel");
                        $(this).val("");
                    }
                }
            });
            $('#categoryText').keyup(function(e) {
                var code = e.which;
                if(code == '13'){
                    if($(this).val().length > 1){
                        self.createSelectedLabel($(this).val(), $('#categoryLabel'), "categoryLabel");
                        $(this).val("");
                    }
                }
            });

            $('#createRoomButton').on("click", function() {
               self.submitForm();
            });
        },

        createSelectedLabel : function(text, selectedLabel, className) {

            var label = $("<span></span>").addClass(className + " roundedCorners");
            label.attr("name", text);
            if(text.length > 8){
                text = text.substring(0, 8) + "...";
            }
            label.html(text);
            selectedLabel.append(label);

            label.on("click", function(e){
                $(this).remove();
            });
        },

        submitForm : function() {
            var self = this;
            var errorMessage = "Enter at least one label for ";
            var locationArray = this.convertToArray($('.locationLabel'));
            var brandArray = this.convertToArray($('.brandLabel'));
            var categoryArray = this.convertToArray($('.categoryLabel'));

            var title = $('#roomTitle').val();
            var startDate = $('#dateStartField').val();
            var endDate = $('#dateEndField').val();
            var shipment = $('#shipmentSelect').val();
            var note = $('#note').val();
            if(title.length == 0 || startDate.length == 0 || endDate.length == 0 || shipment == 'SELECT'){
                this.displayErrorMessage("Please fill up all of field");
                return false;
            }

            if(brandArray.length == 0 || locationArray.length == 0 || categoryArray.length == 0){
                if(brandArray.length == 0){ errorMessage += "Brand "; }
                if(locationArray.length == 0){ errorMessage += "Location "; }
                if(categoryArray.length == 0){ errorMessage += "Category "; }
                this.displayErrorMessage(errorMessage);
                return false;
            }
            startDate = new Date(startDate);
            endDate = new Date(endDate);
            $.ajax({
               url: 'room/createRoom',
               type: 'GET',
               dataType: 'json',
               contentType:  "application/json; charset=utf-8",
               data: {
                   roomTitle    : title,
                   dateStart    : startDate,
                   dateEnd      : endDate,
                   shipmentWay  : shipment,
                   note         : note,
                   location     : locationArray,
                   brand        : brandArray,
                   category     : categoryArray
               }
            }).done(function(data){
                if(data.result == null){
                    self.displayErrorMessage("Error on Server");
                }else{
                    if(data.result == "error"){
                        self.displayErrorMessage(data.message);
                    }else if(data.result == "ok"){
                        alert(data.message);
                        popupWindow.close();
                    }
                }
            });

        },

        convertToArray : function(labels) {
            var labelArray = "";
            var i = 0;
            labels.each(function(e) {
               labelArray += $(this).attr("name") + ",";
                i++;
            });
            labelArray = labelArray.substring(0, labelArray.length -1);
            return labelArray;
        },

        displayErrorMessage : function(message){
            $('#roomErrorMessage').html(message).fadeIn('fast');
        },


        init : function() {
            this.bindListener();
        }

    }

    return new createRoomModule();
});
