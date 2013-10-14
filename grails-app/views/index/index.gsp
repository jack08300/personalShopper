<html>
<head>
    <r:require modules="homePage, jquery"/>
	<title>Personal Shop</title>
    <r:layoutResources/>
</head>
<body>
<div class="indexBody">

    <g:render template="head"/>

    <dvi id="personalShopperBody">
        <div id="personalButton">
            <div id="createBuySection" subButton="roomSubButton">
                <div class="button roundedCorners bottomShadow">
                    <div class="text">Create a room</div>
                </div>

            </div>

            <div id="personalInforSection" subButton="inforSubButton">
                <div class="button roundedCorners bottomShadow">
                    <div class="text">My Information</div>
                </div>
            </div>

            <div class="close"></div>
        </div>

        <div id="friendSection" class="roundedCorners bottomShadow">
            <div class="sectionTitle">
                <span class="text">FRIENDS</span>
            </div>
            <div class="listFriend">

            </div>
        </div>
        <div class="friendFrame"></div>
        <div class="close"></div>

        <div id="roomList" class="roundedCorners bottomShadow">
            <div class="roomCurrent">
                <div class="sectionTitle">
                    <span class="text">Working Room</span>
                </div>
            </div>

            <div class="roomHistory">
                <div class="sectionTitle">
                    <span class="text">Closed Room</span>
                </div>
            </div>
        </div>
    <g:render template="foot"/>
    </div>
</div>

<div id="roomSubButton" >
	<div class="subButton bottomShadow subRoundedCorners deliverButton">For deliver</div>
	<div class="subButton bottomShadow subRoundedCorners buyButton">For Buy</div>
</div>


<div id="popupWindowBackground">
    <div id="roomCreation"  class="roundedCorners bottomShadow"></div>
    <div class="closeButton">X</div>
</div>

<r:layoutResources/>
</body>
</html>


