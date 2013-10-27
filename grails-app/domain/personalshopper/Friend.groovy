package personalshopper

class Friend {
    SpUser requestUser
    SpUser relatedUser
    String status = "REQUESTING"
    Date updateDate

    static constraints = {
        requestUser nullable: false
        relatedUser nullable: false
        updateDate nullable: false
    }
}
