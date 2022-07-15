
   
    const mongoose = require('mongoose');
    const KEY = require("./config").key
    
    async function DriverMongoose() {
        try {
            await mongoose.connect(KEY)
            .then(()=>{console.log("Mongoose is conected")
            
        })
            .catch(()=>{console.log("Mongoose Cannot Work")})
     
            
        } catch (error) {
           console.log(error) 
        }
       
    }

    module.exports={DriverMongoose}
  



