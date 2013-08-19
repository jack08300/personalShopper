import personalshopper.Role
import personalshopper.SpUser
import personalshopper.SpUserRole

class BootStrap {

    def init = { servletContext ->

    	 def adminRole = new Role(authority: 'ROLE_ADMIN').save(flush: true) 
    	 def userRole = new Role(authority: 'ROLE_USER').save(flush: true)

	def testUser = new SpUser(username: 'admin', enabled: true, password: 'admin', email: 'jack08300@gmail.com') 
	testUser.save(flush: true)

	SpUserRole.create testUser, adminRole, true

	assert SpUser.count() == 1 
	assert Role.count() == 2 
	assert SpUserRole.count() == 1
    }
    def destroy = {
    }
}
