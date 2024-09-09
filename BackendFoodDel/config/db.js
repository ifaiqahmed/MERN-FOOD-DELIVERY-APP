import mongoose from "mongoose";

export const connectDB = async ()=>{ 
    await mongoose.connect('mongodb+srv://faiqaws1234:JkPT2dEs6UxY3Cd5@cluster0.9u54t.mongodb.net/FoodDeliveryApp').then(()=>console.log("DB connected"))
    }
