
// module exports is an Object.apply.apply.can bind mutliple functinos together in an array
module.exports.GetDate = GetDate ;
module.exports.GetDay = GetDay ;
function GetDate(){
let today = new Date() ;

    // creating an Object
    let options ={
        weekday: "long" ,
        day: "numeric" ,
        month: "long"
    } ;

    let day = today.toLocaleDateString("en-US" , options ) ;
   return day ;
}


function GetDay(){
    let today = new Date() ;
    
        // creating an Object
        let options ={
            weekday: "long" ,
        } ;
    
        let day = today.toLocaleDateString("en-US" , options ) ;
       return day ;
    }