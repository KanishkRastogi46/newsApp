const mongoose= require('mongoose');

/*const connectDB= async function(){
    try{
        let connectionInstance= await mongoose.connect("mongodb://127.0.0.1/27017/testing");
        return connectionInstance.connection.host;
    }catch(err){
        console.log("Some error ocurred:", err);
    }
}
*/
const connectDB= async function(){
    return new Promise(function(resolve, reject){
        let connectionInstance= mongoose.connect("mongodb://127.0.0.1:27017/testing");
        resolve(connectionInstance);
        reject("Database didn't connect due to some error!!");
    })
}

module.exports= connectDB;