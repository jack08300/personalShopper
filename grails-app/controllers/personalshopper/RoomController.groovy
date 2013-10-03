package personalshopper


class RoomController {
    def springSecurityService

    def index() {
        def user = springSecurityService.currentUser
        render(template:"createRoom", model:[user:user])
    }


}
