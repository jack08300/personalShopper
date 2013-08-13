package personalshopper

import org.apache.commons.lang.builder.HashCodeBuilder

class SpUserRole implements Serializable {

	SpUser spUser
	Role role

	boolean equals(other) {
		if (!(other instanceof SpUserRole)) {
			return false
		}

		other.spUser?.id == spUser?.id &&
			other.role?.id == role?.id
	}

	int hashCode() {
		def builder = new HashCodeBuilder()
		if (spUser) builder.append(spUser.id)
		if (role) builder.append(role.id)
		builder.toHashCode()
	}

	static SpUserRole get(long spUserId, long roleId) {
		find 'from SpUserRole where spUser.id=:spUserId and role.id=:roleId',
			[spUserId: spUserId, roleId: roleId]
	}

	static SpUserRole create(SpUser spUser, Role role, boolean flush = false) {
		new SpUserRole(spUser: spUser, role: role).save(flush: flush, insert: true)
	}

	static boolean remove(SpUser spUser, Role role, boolean flush = false) {
		SpUserRole instance = SpUserRole.findBySpUserAndRole(spUser, role)
		if (!instance) {
			return false
		}

		instance.delete(flush: flush)
		true
	}

	static void removeAll(SpUser spUser) {
		executeUpdate 'DELETE FROM SpUserRole WHERE spUser=:spUser', [spUser: spUser]
	}

	static void removeAll(Role role) {
		executeUpdate 'DELETE FROM SpUserRole WHERE role=:role', [role: role]
	}

	static mapping = {
		id composite: ['role', 'spUser']
		version false
	}
}
