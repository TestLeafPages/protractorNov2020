

class Restaurant {

    constructor(){
        console.log("The restuarant will be open all days");
    }

    orderDosa(){
        console.log("Dosa has been served");
    }

    bill(){
        console.log("This is ur bill");
    }

}

class Branch extends Restaurant {

    constructor(){
        super()
        this.bill()
        console.log("Closed on Sundays");
    }

    orderDosa(){
        console.log("Special Dosa");
    }

    

}

const obj = new Branch()
obj.orderDosa()