package personalshopper
import grails.plugins.springsecurity.Secured

@Secured(['ROLE_ADMIN'])
class IndexController {

    def index() { }
}
