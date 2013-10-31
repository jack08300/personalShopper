<div id="friendList">
    <g:if test="${page == 'FRIEND'}">
        <g:each var="friend" in="${friendList}">
            <div class="eachFriend">
                <g:if test="${friend.relatedUser == self}">
                    <g:set value="${friend.requestUser}" var="theUser" />
                </g:if>
                <g:else>
                    <g:set value="${friend.relatedUser}" var="theUser" />
                </g:else>
                <div class="userIcon">
                    The Icon
                </div>
                <div class="userInformation">
                    <div class="userName">
                        ${theUser.username}
                    </div>
                    <div class="userEmail">
                        ${theUser.email}
                    </div>
                </div>
                <div class="close"></div>
            </div>
        </g:each>
    </g:if>
</div>