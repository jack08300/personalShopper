import personalshopper.Role
import personalshopper.SpUser
import personalshopper.SpUserRole

class BootStrap {

    def init = { servletContext ->

    def adminRole = new Role(authority: 'ROLE_ADMIN').save(flush: true)
    def userRole = new Role(authority: 'ROLE_USER').save(flush: true)

	//def testUser = new SpUser(username: 'admin', enabled: true, password: 'admin', email: 'jack08300@gmail.com')
	//testUser.save(flush: true)

	//SpUserRole.create testUser, adminRole, true

	//assert SpUser.count() == 1
	//assert Role.count() == 2
	//assert SpUserRole.count() == 1


//        new SpUser(username: 'Joyce', password: 'koe7POut', email: 'joyce@gmail.com', enabled: true).save(failOnError: true)
//        new SpUser(username: 'Brandon', password: 'koe7POut', email: 'Brandon@gmail.com', enabled: true).save(failOnError: true)
//        new SpUser(username: 'Howard', password: 'koe7POut', email: 'Howard@gmail.com', enabled: true).save(failOnError: true)
//        new SpUser(username: 'Serge', password: 'koe7POut', email: 'Serge@gmail.com', enabled: true).save(failOnError: true)
//        new SpUser(username: 'Cindy', password: 'koe7POut', email: 'Cindy@gmail.com', enabled: true).save(failOnError: true)
//        new SpUser(username: 'Jenny', password: 'koe7POut', email: 'Jenny@gmail.com', enabled: true).save(failOnError: true)
    }
    def destroy = {
    }
}
