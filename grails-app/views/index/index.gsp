<html>
<head>
	<link rel="stylesheet" href="${resource(dir: 'css', file: 'index.css')}" type="text/css">
	<meta name='layout' content='main'/>
	<title>Personal Shop</title>
</head>
<body>
<div class="indexBody">
	<div id="personalButton">
		<div id="createBuySection" subButton="roomSubButton">
			<div class="button roundedCorners buttonShadow">
				<div class="text">Create a room</div>
			</div>
			
		</div>
		
		<div id="personalInforSection" subButton="inforSubButton">
			<div class="button roundedCorners buttonShadow">
				<div class="text">My Information</div>
			</div>
		</div>
		
		<div class="close"></div>
	</div>

	<div id="friendSection" class="roundedCorners buttonShadow">
		<div class="sectionTitle">
			<span class="text">FRIENDS</span>
		</div>
		<div class="listFriend">
			
		</div>
	</div>
    <div class="friendFrame"></div>
	<div class="close"></div>
	
	<div id="roomList" class="roundedCorners buttonShadow">
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
</div>

<div id="roomSubButton" >
	<div class="subButton buttonShadow subRoundedCorners deliverButton">For deliver</div>
	<div class="subButton buttonShadow subRoundedCorners buyButton">For Buy</div>
</div>


<div id="popupWindowBackground">
    <div class="closeButton">X</div>
</div>

<g:javascript src="index.js"/>
</body>
</html>


