class Aa {

    constructor(amount){
        this.amount = amount
    }
    haha() {
        console.log("my first node app");
    
    
        if(this.amount <=10) return console.log("the amount is less than 10");
        
        console.log("the amount is greater than 10");
    }
    

}

module.exports.locate= Aa;
module.exports.age = 20;
module.exports.person = [

    {id:1,name:"Juan",lastname:"de lacruz"},
    {id:2,name:"Ben",lastname:"Sampo"}

]

