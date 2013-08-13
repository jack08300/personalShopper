package personalshopper

import grails.plugins.springsecurity.Secured

@Secured(['ROLE_ADMIN'])
class SpUserController {
    static scaffold = true
}
