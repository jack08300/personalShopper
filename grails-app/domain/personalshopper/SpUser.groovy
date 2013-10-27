package personalshopper

class SpUser {

	transient springSecurityService

	String username
	String password
	String email

	boolean enabled
	boolean accountExpired
	boolean accountLocked
	boolean passwordExpired

	static constraints = {
		email blank: false, unique: true
		username blank: false
		password blank: false

	}

	static mapping = {
		password column: '`password`'
	}

	Set<Role> getAuthorities() {
		SpUserRole.findAllBySpUser(this).collect { it.role } as Set
	}

	def beforeInsert() {
		encodePassword()
	}

	def beforeUpdate() {
		if (isDirty('password')) {
			encodePassword()
		}
	}

	protected void encodePassword() {
		password = springSecurityService.encodePassword(password)
	}
}
