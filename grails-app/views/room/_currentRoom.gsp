<div class="rooms">

    <g:each var="room" in="${currentRoom}">
        <div id="workingRoom${room.id}" class="theRoom roomCorner" roomId='${room.id}'>
            <div class="roomHeader">
                ${room.roomTitle}
            </div>
            <div class="roomBody">${room.location}</div>
            <div class="roomBody">${room.stuffCategory}</div>
            <div class="roomBody">${room.shipmentWay}</div>
            <g:if test="${room.endDate != null}">
                <div class="roomFooter">
                    <g:formatDate date="${room.endDate}"  format="MM-dd-yyyy" />
                </div>
            </g:if>

        </div>
    </g:each>
    <div class="close"></div>
</div>