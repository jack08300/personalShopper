
<g:javascript src="createRoom.js"/>
    <div class="error message" id="roomErrorMessage"></div>
    <table class="createRoomTable">
        <tr>
            <td>
                <div id="roomTitleLabel" class="creationLabel">Room Title: </div>
            </td>
            <td>
                <div id="roomTitleField" class="creationField"><g:textField name="roomTitle" id="roomTitle" value="${roomTitle}" /></div>
            </td>
        </tr>
        <tr><td colspan="2"><hr/></td></tr>
        <tr>
            <td>
                <div id="dateRange" class="creationLabel">Date Range: </div>
            </td>
            <td>
                <div id="dateStart" class="creationField"><g:textField name="dateStart" id="dateStartField" value="${dateStart}" placeholder="Start Date" /></div>
                <div id="dateEnd" class="creationField"><g:textField name="dateEnd" id="dateEndField" value="${dateEnd}" placeholder="Close Date" /></div>
            </td>
        </tr>
        <tr><td colspan="2"><hr/></td></tr>
        <tr>
            <td>
                <div id="location" class="creationLabel">Location:</div>
            </td>
            <td>
                <div id="locationField" class="creationField"><g:textField name="location" id="locationText" value="${location}"  placeholder="Press Enter to add Location" /></div>
            </td>
        </tr>
        <tr>
            <td></td>
            <td><div id="locationLabel"></div></td>
        </tr>
        <tr><td colspan="2"><hr/></td></tr>
        <tr>
            <td>
                <div id="Category" class="creationLabel">Accept Category:</div>
            </td>
            <td>
                <div id="categoryField" class="creationField">
                    <g:textField id="categoryText" name="category" value="${category}" placeholder="Press Enter to add category" />
                </div>
            </td>
        </tr>
        <tr>
            <td></td>
            <td><div id="categoryLabel"></div></td>
        </tr>
        <tr><td colspan="2"><hr/></td></tr>
        <tr>
            <td>
                <div id="brand" class="creationLabel">Accept Brand:</div>
            </td>
            <td>
                <div id="brandField" class="creationField">
                    <g:textField id="brandText" name="brand" value="${brand}" placeholder="Press Enter to add brand" />
                </div>
            </td>
        </tr>
        <tr>
            <td></td>
            <td><div id="brandLabels"></div></td>
        </tr>
        <tr><td colspan="2"><hr/></td></tr>
        <tr>
            <td>
                <div id="shipment" class="creationLabel">Shipment:</div>
            </td>
            <td>
                <div id="shipmentField" class="creationField"><g:select id="shipmentSelect" name="shipment" from="${shipmentWayList}" /></div>
            </td>
        </tr>
        <tr><td colspan="2"><hr/></td></tr>
        <tr>
            <td>
                <div id="note" class="creationLabel">Note:</div>
            </td>
            <td>
                <div id="noteField" class="creationField"><g:textArea name="note" id="note" value="${note}" /></div>
            </td>
        </tr>
        <tr>
            <td colspan="2"><div id="createRoomButton" class="button roundedCorners bottomShadow">Create</div></td>
        </tr>

    </table>