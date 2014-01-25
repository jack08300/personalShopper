package personalshopper

import grails.plugins.springsecurity.Secured
import org.codehaus.groovy.grails.web.json.JSONObject

@Secured(['ROLE_ADMIN', 'ROLE_USER'])
class FriendController {
    def springSecurityService
    def index() {
        def user = springSecurityService.currentUser

        def myFriend = Friend.find("FROM Friend WHERE (relatedUser = ? OR requestUser = ?) AND status = ? ", [user, user, 'FRIEND'])

        //def requestToMe = Friend.find("FROM Friend WHERE relatedUser = ? AND status = ? ", [user, 'REQUESTING'])

       // def myRequest = Friend.find("FROM Friend WHERE requestUser = ? AND status = ? ", [user, 'REQUESTING'])

        render(template: 'friend', model: [friendList: myFriend, self: user, page: 'FRIEND'])
    }

    def searchUser(String searchText) {
        def user = springSecurityService.currentUser

        def userFriend = Friend.findAll("FROM Friend WHERE (relatedUser = ? OR requestUser = ?)", [user, user])

        String userList = "'" + user.email + "'"

        userFriend.each{ friend->
            String email
            if(friend.relatedUser == user.email){
                email = friend.relatedUser.email
            }else{
                email = friend.requestUser.email
            }
            userList += ",'" + email + "'"
        }

        def userResult = SpUser.findAll("FROM SpUser WHERE (email LIKE '%" + searchText + "%@%' OR username LIKE '%" + searchText + "%')" +
                " AND email NOT IN (" + userList + ")")

        render(template: 'friendList', model: [searchList: userResult, self: user, page: 'SEARCH'])
    }

    def requestList(){
        def user = springSecurityService.currentUser

        def request = Friend.findAll("FROM Friend WHERE relatedUser = ? AND status = ?", [user, 'REQUESTING'])

        render(template: 'friendList', model: [requestList: request, self: user, page:'REQUEST'])

    }

    def acceptUser(int userId){
        def user = springSecurityService.currentUser
        def requestUser = SpUser.get(userId)

        def requesting = Friend.findAll("FROM Friend WHERE relatedUser = ? AND status = ? AND requestUser = ?", [user, 'REQUESTING', requestUser])
        String result = "error"
        if(requesting != null){
            requesting.status = []

            result = "ok"
        }
        render result
    }

    def sendRequest(String requestId){
        def result
        def user = springSecurityService.currentUser
        def requestUser = SpUser.get(requestId)
        def requested  = Friend.find("FROM Friend WHERE (relatedUser = ? AND requestUser = ?) OR" +
                " (relatedUser = ? AND requestUser = ?)", [user, requestUser, requestUser, user])

        if(requested == null){
            new Friend(relatedUser: requestUser, requestUser: user, updateDate: new Date()).save(failOnError: true)
            result = new JSONObject(result: "ok", message: "Added successful")
        }else{
            result = new JSONObject(result: "error", message: "Duplicate User Request")
        }

        render result


    }
}
