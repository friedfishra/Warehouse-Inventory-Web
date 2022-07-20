export class Item {
    zoneId :number;
    aisle :number;
    itemName :string;
    weight :number;
    itemId :number;
    weightType :string;

    constructor(zoneId = 0, aisle = 0, itemName = '', weight = 0, itemId = 0, weightType = '') {
        this.zoneId = zoneId;
        this.aisle = aisle;
        this.itemName = itemName;
        this.weight = weight;
        this.itemId = itemId;
        this.weightType = weightType;
    }



    /*
    "zoneId": 3,
        "aisle": 2,
        "itemName": "Bowflex",
        "weight": 25,
        "itemId": 1,
        "weightType": "Dumbbell"


    */
}