<div id="friendPage" class="roundedCorners bottomShadow">
    <div id="friendPageTitle">
        <span class="title" id="friendListPage">
            Friends
        </span>
        <span class="title" id="requestListPage">
            Requests
        </span>
        <span class="title">
            <g:textField name="searchUser" id="searchUser" placeholder = "Search User" />
        </span>
    </div>

    <div id="searchUserResult">

    </div>

    <g:render template="friendList" />

</div>

<g:javascript src="friend.js"/>
