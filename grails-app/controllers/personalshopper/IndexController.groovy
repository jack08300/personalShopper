package personalshopper
import grails.plugins.springsecurity.Secured

@Secured(['ROLE_ADMIN', 'ROLE_USER'])
class IndexController {

    def index() {
    }
}
