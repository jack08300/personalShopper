<div id="room">
    <div class="roomTitle">${room.roomTitle}</div>

    <div class="roomDetail">
        <div class="detailTitle"> Room Detail </div>
        <div class="detailContent">
            <table>
                <tr>
                    <td>
                        <div class="detailTitle">Date Range: </div>
                    </td>
                    <td>
                        <div class="detailTitle">
                            <g:formatDate format='yyyy-MM-dd' date="${room.startDate}" />
                                          -
                            <g:formatDate format='yyyy-MM-dd' date="${room.endDate}" />
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="detailTitle">Shipment: </div>
                    </td>
                    <td>
                        <div class="detailTitle">${room.shipmentWay}</div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="detailTitle">Location: </div>
                    </td>
                    <td>
                        <div class="detailTitle">${room.location}</div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="detailTitle">Brand: </div>
                    </td>
                    <td>
                        <div class="detailTitle">${room.brand}</div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="detailTitle">Category: </div>
                    </td>
                    <td>
                        <div class="detailTitle">${room.stuffCategory}</div>
                    </td>
                </tr>
            </table>
        </div>
        <div class="roomContent"></div>
    </div>

    <div class="pplInRoom">
        <div class="pplInRoomTitle"></div>

        <div class="eachPplInRoom"></div>
    </div>
</div>