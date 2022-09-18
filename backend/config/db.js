import mongoose from "mongoose";
import colors from 'colors'

const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://hisham:pass123@proshop.hxn5nbt.mongodb.net/proshop?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log(`mongoDB connected: ${conn.connection.host}`.cyan.bold.bgCyan);
    } catch (error) {
        console.error(`${error.message}`.red.underline.bold)
        process.exit(1);
    }
}

export default connectDB