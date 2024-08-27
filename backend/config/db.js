import mongoose from "mongoose";
export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://veerendrababu:1693286@cluster0.cdtbasv.mongodb.net/food-del').then(()=>console.log("DB Connected verru"))
}
 