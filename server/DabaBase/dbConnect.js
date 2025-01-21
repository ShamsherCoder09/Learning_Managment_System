import mongoose from "mongoose";

export const dbConnect = async ()=>{
    try {
        const response = await mongoose.connect(`${process.env.MONGODB_URL}`);
        if(response){
            console.log("databse is connected successfully")
        }
    } catch (error) {
        console.log("error while connecting database ", error);
    }

}