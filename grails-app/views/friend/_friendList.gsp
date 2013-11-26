
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

            <g:elseif test="${page == 'SEARCH'}">
                <g:each var="theUser" in="${searchList}">
                    <div class="eacUser">
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
                        <div class="requestUserButton button roundedCorners bottomShadow" userId='${theUser.getId()}'>
                            Request
                        </div>
                        <div class="close"></div>
                    </div>
                </g:each>
            </g:elseif>

            <g:elseif test="${page == 'REQUEST'}">
                <g:each var="theUser" in="${requestList}">
                    <div class="eacUser">
                        <div class="userIcon">
                            The Icon
                        </div>
                        <div class="userInformation">
                            <div class="userName">
                                ${theUser.requestUser.username}
                            </div>
                            <div class="userEmail">
                                ${theUser.requestUser.email}
                            </div>
                        </div>
                        <div class="requestUserButton button roundedCorners bottomShadow" userId='${theUser.requestUser.getId()}'>
                            ACCEPT
                        </div>
                        <div class="close"></div>
                    </div>
                </g:each>
            </g:elseif>
        </div>
        <g:javascript src="friendList.js"/>