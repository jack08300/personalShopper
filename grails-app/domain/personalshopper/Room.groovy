package personalshopper

class Room {
    String roomTitle;
    Date startDate;
    Date endDate;
    String shipmentWay;
    String country;
    String state;
    String city;
    String brand;
    String location;
    String stuffCategory;
    String note;
    Images images;
    String status = 'PRIVATE';
    String comment;
    UserInRoom relatedUser;
    SpUser creater;

    static constraints = {
        state (nullable: true)
        city (nullable: true)
        comment (nullable: true)
        country (nullable: true)
        images (nullable: true)
        relatedUser (nullable: true)
    }
}
