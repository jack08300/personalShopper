package personalshopper

class UserInRoom {
    static belongsTo = [room:Room]
    SpUser user
    Date joinDate
    static constraints = {
    }
}
