import mongoose from "mongoose" ;



const Connection = async(username, password) => {
    const URL = `mongodb+srv://simantaraj45:sonuNoSql@crudapp.lug8iiu.mongodb.net/?retryWrites=true&w=majority` ;
    try{
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true })
        console.log("database connected sucessfully") ;
    }catch(error){
        console.log("Error while connecting with the database", error) ;
    }
}

export default Connection ;



