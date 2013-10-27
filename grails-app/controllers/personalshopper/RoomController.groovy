package personalshopper

import grails.plugins.springsecurity.Secured
import org.codehaus.groovy.grails.web.json.JSONObject

@Secured(['ROLE_ADMIN', 'ROLE_USER'])
class RoomController {
    def springSecurityService
    def shipmentWayList = ['SELECT', "My Self", "Shipping Company"]
    def categoryList = ['SELECT', 'Cloth', 'Shoes', 'Toy', 'Small Eletranic', 'Cell Phone']
    def brandList   = ['SELECT', 'TOMS', 'Carter\'s', 'Shooshoose', 'Niky', 'Apple', 'HTC']
    def index() {
        def user = springSecurityService.currentUser
        render(template:"createRoom", model:[user:user, shipmentWayList: shipmentWayList, categoryList: categoryList, brandList: brandList])
    }

    def createRoom(String roomTitle, String dateStart, String dateEnd, String location, String category, String brand, String shipmentWay, String note){
//        def categoryArray = category.split(",")
//        def brandArray = brand.split(",")
//        def locationArray = location.split(",")

        def user = springSecurityService.currentUser
        println user
        def duplicateRoom = Room.findByRoomTitleAndCreater(roomTitle, user)
        def result;
        if(!duplicateRoom){
            new Room(
                    roomTitle: roomTitle,
                    startDate: new Date(dateStart),
                    endDate: new Date(dateEnd),
                    location: location,
                    shipmentWay: shipmentWay,
                    brand: brand,
                    stuffCategory: category,
                    note: note,
                    creater: user
            ).save(failOnError: true)

            result = new JSONObject([result: "ok", message: "Room build successfully"])
        }else{
            result = new JSONObject([result: "error", message: "Duplicate Title Name"])
        }
        render result
    }

    def enterRoom(String roomId){
        def room = Room.findById(roomId);
        def result
        if(room != null){
            render(template: 'room', model: [room: room])
        }else{
            result = new JSONObject([result: 'error', message: 'Can\'t find the room'])
        }

        render result
    }
}
