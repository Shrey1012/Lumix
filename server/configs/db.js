import mongoose from "mongoose";
import dns from "node:dns";

dns.setServers(["8.8.8.8", "1.1.1.1"]);
const connectDB = async () => {
    try {
        mongoose.connection.on('connected', () => console.log('Database connected'))
        await mongoose.connect(`${process.env.MONGODB_URI}/lumix`)
    } catch (error) {
        console.log(error.message);
    }
};

export default connectDB;