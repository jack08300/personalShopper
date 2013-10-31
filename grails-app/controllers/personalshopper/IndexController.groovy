package personalshopper
import grails.plugins.springsecurity.Secured

@Secured(['ROLE_ADMIN', 'ROLE_USER'])
class IndexController {
    def springSecurityService
    def index() {
        def user = springSecurityService.currentUser

        if(user == null){ return false }

        def currentRoom = Room.findAllByCreaterAndStatus(user, "OPEN");

        render(view: "index", model: [currentRoom: currentRoom])
    }


}
