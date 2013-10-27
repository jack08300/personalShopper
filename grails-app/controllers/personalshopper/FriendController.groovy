package personalshopper

import grails.plugins.springsecurity.Secured

@Secured(['ROLE_ADMIN', 'ROLE_USER'])
class FriendController {
    def springSecurityService
    def index() {
        def user = springSecurityService.currentUser

        def myFriend = Friend.find("FROM Friend WHERE (relatedUser = ? OR requestUser = ?) AND status = ? ", [user, user, 'FRIEND'])

        def requestToMe = Friend.find("FROM Friend WHERE relatedUser = ? AND status = ? ", [user, 'REQUESTING'])

        def myRequest = Friend.find("FROM Friend WHERE requestUser = ? AND status = ? ", [user, 'REQUESTING'])

        render(template: 'friend', modle: [myFriend: myFriend, requestToMe: requestToMe, myRequest: myRequest])
    }
}
